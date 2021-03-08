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
import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';
const Filter = ({
	isFilterOpen,
	filterData,
	onFilterSubmit,
	onFilterClear,
	isLoading,
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
			<FilterHeader>
				{isLoading ? <Skeleton width={80} /> : 'Filters'}
			</FilterHeader>
			<FilterItem>
				<FilterName>
					{isLoading ? <Skeleton width={80} /> : 'Location'}
				</FilterName>
				{isLoading ? (
					<Skeleton height={40} />
				) : (
					<MyAutosuggest
						placeholder={'e.g, Vadodara'}
						field={'location'}
						onSuggestionValueChange={onSuggestionValueChange}
						filterData={filterData.location}
					/>
				)}
			</FilterItem>

			<FilterItem>
				<FilterName>
					{isLoading ? <Skeleton width={80} /> : 'Job Title'}
				</FilterName>
				{isLoading ? (
					<Skeleton height={40} />
				) : (
					<MyAutosuggest
						placeholder={'e.g, Software Developer'}
						field={'jobtitle'}
						onSuggestionValueChange={onSuggestionValueChange}
						filterData={filterData.jobtitle}
					/>
				)}
			</FilterItem>
			<FilterItem>
				<FilterName>
					{isLoading ? <Skeleton width={80} /> : 'Company'}
				</FilterName>
				{isLoading ? (
					<Skeleton height={40} />
				) : (
					<MyAutosuggest
						placeholder={'e.g, Microsoft'}
						field={'company'}
						onSuggestionValueChange={onSuggestionValueChange}
						filterData={filterData.company}
					/>
				)}
			</FilterItem>

			<FilterItem>
				<FilterName>
					{isLoading ? <Skeleton width={80} /> : 'Experience (in years)'}
				</FilterName>
				{isLoading ? (
					<Skeleton height={40} />
				) : (
					<FilterInput
						placeholder='e.g, 3'
						name='experience'
						value={filterData.experience}
						onChange={onValueChange}
						type='number'
						min='0'
						max='30'
					/>
				)}
			</FilterItem>

			<FilterItem>
				<FilterName>
					{isLoading ? <Skeleton width={80} /> : 'Salary'}
				</FilterName>
				{isLoading ? (
					<Skeleton height={10} />
				) : (
					<FilterRange
						step={2}
						type='range'
						name='salary'
						value={inputValue}
						onMouseUp={onValueChange}
						onChange={onInputRangeChange}
					/>
				)}
			</FilterItem>
			<FilterItem>
				{isLoading ? (
					<Skeleton width={80} />
				) : (
					<ClearButton onClick={onFilterClear}>Clear Filters</ClearButton>
				)}
			</FilterItem>
		</FilterContainer>
	);
};

export default Filter;
