import {
	FilterContainer,
	FilterItem,
	ClearButton,
	FilterName,
	FilterRange,
	FilterHeader,
	FilterInput,
} from './Filter.elements';
import MyAutosuggest from '../MyAutosuggest/MyAutosuggest';
import { useState } from 'react';
const Filter = ({
	isFilterOpen,
	filterData,
	onFilterSubmit,
	onFilterClear,
}) => {
	const onValueChange = (e) => {
		onFilterSubmit(e.target.name, e.target.value);
	};
	const onSuggestionValueChange = (name, value) => {
		onFilterSubmit(name, value);
	};
	const [inputValue, setInputValue] = useState(filterData.salary);
	const onInputRangeChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<FilterContainer isFilterOpen={isFilterOpen}>
			<FilterHeader>Filters</FilterHeader>
			<FilterItem>
				<FilterName>Location</FilterName>
				<MyAutosuggest
					placeholder={'e.g, Vadodara'}
					field={'location'}
					onSuggestionValueChange={onSuggestionValueChange}
					filterData={filterData.location}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Job Title</FilterName>
				<MyAutosuggest
					placeholder={'e,g, Software Developer'}
					field={'jobtitle'}
					onSuggestionValueChange={onSuggestionValueChange}
					filterData={filterData.jobtitle}
				/>
			</FilterItem>
			<FilterItem>
				<FilterName>Company</FilterName>
				<MyAutosuggest
					placeholder={'e.g, Microsoft'}
					field={'company'}
					onSuggestionValueChange={onSuggestionValueChange}
					filterData={filterData.company}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Experience (in years)</FilterName>
				<FilterInput
					placeholder='e.g, 3'
					name='experience'
					value={filterData.experience}
					onChange={onValueChange}
					type='number'
					min='0'
					max='30'
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Salary</FilterName>
				<FilterRange
					step={2}
					type='range'
					name='salary'
					value={inputValue}
					onMouseUp={onValueChange}
					onChange={onInputRangeChange}
				/>
				{/* <div style={{ position: 'absolute', left: '100px' }}>sdfsfd</div> */}
			</FilterItem>
			<FilterItem>
				<ClearButton onClick={onFilterClear}>Clear Filters</ClearButton>
			</FilterItem>
		</FilterContainer>
	);
};

export default Filter;
