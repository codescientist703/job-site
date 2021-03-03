import styled from 'styled-components/macro';
import Autosuggest from 'react-autosuggest';
import { useState } from 'react';
import axios from '../../axios';
export const InputContainer = styled.div`
	.react-autosuggest__input {
		border: 1px solid #d2d2d2;
		padding: 8px 14px;
		border-radius: 5px;
		font-size: 1rem;
		width: 100%;
		@media screen and (min-width: ${({ theme }) => theme.md}px) {
			width: 100%;
		}
		@media screen and (min-width: ${({ theme }) => theme.lg}px) {
			width: auto;
		}

		&:focus {
			/* border: 5px solid lightblue; */
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
		padding: 0px 0px;
		border-radius: 5px;
		outline: none;
		font-size: 1rem;
		width: 100%;
	}

	.react-autosuggest__suggestions-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.react-autosuggest__suggestion {
		cursor: pointer;
		padding: 10px 20px;
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
	const [value, setValue] = useState(filterData);
	const [suggestions, setSuggestions] = useState([]);
	const getSuggestions = async (value) => {
		const inputValue = value.trim().toLowerCase();
		const response = await axios.get(`${field}/?search=` + inputValue);

		return response.data;
	};

	const onChange = (event, { newValue }) => {
		setValue(newValue);
	};
	const onSuggestionsFetchRequested = async ({ value }) => {
		setValue(value);
		const data = await getSuggestions(value);
		setSuggestions(data);
	};
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};
	const getSuggestionValue = (suggestion) => suggestion.name;
	const renderSuggestion = (suggestion) => <span>{suggestion.name}</span>;

	const onSuggestionClick = (event, { suggestionValue }) => {
		console.log(suggestionValue);
		onSuggestionValueChange(field, suggestionValue);
	};
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
			/>
		</InputContainer>
	);
};
export default MyAutosuggest;
