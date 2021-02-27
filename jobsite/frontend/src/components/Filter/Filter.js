import {
	FilterContainer,
	FilterItem,
	SubmitBtn,
	FilterName,
	FilterInput,
	FilterRange,
	FilterHeader,
} from './Filter.elements';
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from '../../axios';

const Filter = ({ isFilterOpen, filterData, onFilterSubmit }) => {
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const getSuggestions = async (value) => {
		const inputValue = value.trim().toLowerCase();
		const response = await axios.get(
			'http://127.0.0.1:8000/api/jobtitle/?search=' + inputValue
		);

		return response.data;
	};

	const onChange = (event, { newValue }) => {
		setValue(newValue);
	};
	const onSuggestionsFetchRequested = async ({ value }) => {
		setValue(value);
		const ha = await getSuggestions(value);
		setSuggestions(ha);
	};
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};
	const getSuggestionValue = (suggestion) => suggestion.name;
	const renderSuggestion = (suggestion) => (
		<span onClick={haha}>{suggestion.name}</span>
	);
	const haha = (event) => {
		console.log('hgi');
	};
	const inputProps = {
		placeholder: 'Type a programming language',
		value,
		onChange: onChange,
	};
	return (
		<FilterContainer isFilterOpen={isFilterOpen}>
			<FilterHeader>Filters</FilterHeader>
			<FilterItem>
				<FilterName>Location</FilterName>
				<Autosuggest
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					suggestions={suggestions}
					onSuggestionsFetchRequested={onSuggestionsFetchRequested}
					onSuggestionsClearRequested={onSuggestionsClearRequested}
					inputProps={{
						placeholder: 'haha',
						value,
						onChange: onChange,
					}}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Job Title</FilterName>
				<FilterInput
					placeholder='e.g, Software Developer'
					type='text'
					name='jobtitle'
					value={filterData.jobtitle}
				/>
			</FilterItem>
			<FilterItem>
				<FilterName>Company</FilterName>
				<FilterInput
					placeholder='e.g, Microsoft'
					type='text'
					name='company'
					value={filterData.company}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Experience (in years)</FilterName>
				<FilterInput
					placeholder='e.g, 3'
					name='experience'
					value={filterData.experience}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Salary</FilterName>
				<FilterRange
					step={2}
					type='range'
					name='salary'
					value={filterData.salary}
				/>
			</FilterItem>
			<FilterItem>
				<SubmitBtn onClick={onFilterSubmit}>Submit</SubmitBtn>
			</FilterItem>
		</FilterContainer>
	);
};

export default Filter;
