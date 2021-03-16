import {
	FilterContainer,
	FilterItem,
	ClearButton,
	FilterName,
	FilterRange,
	SliderValue,
	FilterHeader,
	FilterInput,
	Range,
	RangeData,
} from './Filter.elements';
import { MyAutosuggest } from '../../components';
import Skeleton from 'react-loading-skeleton';
import { useState, useEffect } from 'react';
const Filter = ({
	isFilterOpen,
	filterData,
	onFilterSubmit,
	onFilterClear,
	isLoading,
	filterFor,
}) => {
	const [inputValue, setInputValue] = useState(filterData.salary);

	const onValueChange = (e) => {
		onFilterSubmit(e.target.name, e.target.value);
	};

	const onSuggestionValueChange = (name, value) => {
		onFilterSubmit(name, value);
	};

	const onInputRangeChange = (e) => {
		setInputValue(e.target.value);
	};

	useEffect(() => {
		setInputValue(filterData.salary);
	}, [filterData.salary]);

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
					{isLoading ? <Skeleton width={80} /> : 'Minimum Salary'}
				</FilterName>
				<SliderValue>
					{isLoading ? <Skeleton width={30} /> : `₹ ${inputValue}`}
				</SliderValue>
				{isLoading ? (
					<Skeleton height={10} />
				) : filterFor === 'internship' ? (
					<FilterRange
						step='1000'
						type='range'
						name='salary'
						min='0'
						max='10000'
						value={inputValue}
						onMouseUp={onValueChange}
						onChange={onInputRangeChange}
						onTouchEnd={onValueChange}
					/>
				) : (
					<FilterRange
						step='50000'
						type='range'
						name='salary'
						min='0'
						max='5000000'
						value={inputValue}
						onMouseUp={onValueChange}
						onChange={onInputRangeChange}
						onTouchEnd={onValueChange}
					/>
				)}

				{filterFor === 'internship' ? (
					<>
						{isLoading ? (
							<Skeleton />
						) : (
							<RangeData>
								<Range>0</Range>
								<Range>5k</Range>
								<Range>10k</Range>
							</RangeData>
						)}
					</>
				) : (
					<>
						{isLoading ? (
							<Skeleton />
						) : (
							<RangeData>
								<Range>0</Range>
								<Range>25 LPA</Range>
								<Range>50 LPA</Range>
							</RangeData>
						)}
					</>
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
