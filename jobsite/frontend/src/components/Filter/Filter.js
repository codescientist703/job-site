import {
	FilterContainer,
	FilterItem,
	SubmitBtn,
	FilterName,
	FilterInput,
	FilterRange,
	FilterHeader,
} from './Filter.elements';
import MyAutosuggest from '../MyAutosuggest/MyAutosuggest';

const Filter = ({ isFilterOpen, filterData, onFilterSubmit, fuckyou }) => {
	return (
		<FilterContainer isFilterOpen={isFilterOpen}>
			<FilterHeader>Filters</FilterHeader>
			<FilterItem>
				<FilterName>Location</FilterName>
				<MyAutosuggest
					placeholder={'type any job'}
					field={'jobtitle'}
					fuckyou={fuckyou}
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
