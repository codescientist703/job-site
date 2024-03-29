import styled from 'styled-components/macro';
import Autosuggest from 'react-autosuggest';
import { useState, useEffect } from 'react';
import axios from '../../axios';

export const InputContainer = styled.div`
	.react-autosuggest__input {
		border: 1px solid #d2d2d2;
		padding: 0.5rem 0.875rem;
		border-radius: 5px;
		font-size: 1rem;
		width: 100%;
		outline: none;

		&:focus {
			border-color: blue;
		}
	}

	.react-autosuggest__input--open {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.react-autosuggest__container {
		position: relative;
	}

	.react-autosuggest__suggestions-container {
		display: none;
		margin: 0;
	}

	.react-autosuggest__suggestions-container--open {
		display: block;
		z-index: 2;
		position: absolute;
		top: 50px;
		background-color: #fff;
		border: 1px solid #d2d2d2;
		padding: 0;
		border-radius: 5px;
		outline: none;
		font-size: 1rem;
		width: 100%;
	}

	.react-autosuggest__suggestions-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		max-height: 200px;
		overflow-y: auto;
	}

	.react-autosuggest__suggestion {
		cursor: pointer;
		padding: 0.625rem 1.25rem;
	}

	.react-autosuggest__suggestion--highlighted {
		background-color: #ddd;
	}
`;

const MyAutosuggest = ({
	placeholder,
	field,
	onSuggestionValueChange,
	filterData,
}) => {
	const errorMsg = 'No Results Found :(';
	const [value, setValue] = useState(filterData);
	const [suggestions, setSuggestions] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(`${field}/`);
			setData(response.data);
		}
		fetchData();
	}, []);

	const getSuggestions = async (value) => {
		const inputValue = value.trim().toLowerCase();
		// const response = await axios.get(`${field}/?search=` + inputValue);
		const filteredSuggestions = data.filter((element) =>
			element.name.toLowerCase().includes(inputValue)
		);

		return filteredSuggestions;
	};

	const onChange = (event, { newValue }) => {
		if (newValue !== errorMsg) {
			setValue(newValue);
			if (newValue === '' && value !== '') {
				onSuggestionValueChange(field, newValue);
			}
		}
	};
	const onSuggestionsFetchRequested = async ({ value }) => {
		// setValue(value);
		let data = await getSuggestions(value);
		if (data.length === 0) {
			data = [{ name: errorMsg }];
		}
		setSuggestions(data);
	};
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};
	const getSuggestionValue = (suggestion) => suggestion.name;
	const renderSuggestion = (suggestion) => <span>{suggestion.name}</span>;

	const onSuggestionClick = (event, { suggestionValue }) => {
		if (suggestionValue !== errorMsg) {
			onSuggestionValueChange(field, suggestionValue);
		}
	};
	function shouldRenderSuggestions(value) {
		return value.trim().length >= 0 && value.trim().length <= 30;
	}
	const inputProps = {
		placeholder: placeholder,
		value,
		onChange: onChange,
	};
	return (
		<InputContainer>
			<Autosuggest
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				onSuggestionSelected={onSuggestionClick}
				suggestions={suggestions}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				inputProps={inputProps}
				focusInputOnSuggestionClick={false}
				highlightFirstSuggestion={true}
				shouldRenderSuggestions={shouldRenderSuggestions}
			/>
		</InputContainer>
	);
};
export default MyAutosuggest;
