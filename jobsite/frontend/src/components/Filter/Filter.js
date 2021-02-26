import {
	FilterContainer,
	FilterItem,
	SubmitBtn,
	FilterName,
	FilterInput,
	FilterRange,
	FilterHeader,
} from './Filter.elements';

const Filter = ({ isFilterOpen, filterData, onChange, onFilterSubmit }) => {
	return (
		<FilterContainer isFilterOpen={isFilterOpen}>
			<FilterHeader>Filters</FilterHeader>
			<FilterItem>
				<FilterName>Location</FilterName>
				<FilterInput
					placeholder='e.g, Vadodara'
					type='text'
					name='location'
					value={filterData.location}
					onChange={onChange}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Job Title</FilterName>
				<FilterInput
					placeholder='e.g, Software Developer'
					type='text'
					name='jobtitle'
					value={filterData.jobtitle}
					onChange={onChange}
				/>
			</FilterItem>
			<FilterItem>
				<FilterName>Company</FilterName>
				<FilterInput
					placeholder='e.g, Microsoft'
					type='text'
					name='company'
					value={filterData.company}
					onChange={onChange}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Experience (in years)</FilterName>
				<FilterInput
					placeholder='e.g, 3'
					name='experience'
					value={filterData.experience}
					onChange={onChange}
				/>
			</FilterItem>

			<FilterItem>
				<FilterName>Salary</FilterName>
				<FilterRange
					step={2}
					type='range'
					name='salary'
					value={filterData.salary}
					onChange={onChange}
				/>
			</FilterItem>
			<FilterItem>
				<SubmitBtn onClick={onFilterSubmit}>Submit</SubmitBtn>
			</FilterItem>
		</FilterContainer>
	);
};

export default Filter;
