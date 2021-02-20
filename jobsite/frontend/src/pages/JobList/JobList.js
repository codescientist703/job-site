import React, { useState } from 'react';
// import { FiArrowLeft } from 'react-icons/fi';
import { JobCard, Breadcumb, Container } from '../../components';
import ReactPaginate from 'react-paginate';
import {
	MainContainer,
	JobContainer,
	FilterContainer,
	FilterBtn,
	FilterItem,
	SubmitBtn,
	FilterName,
	FilterInput,
	FilterRange,
	FilterHeader,
	PaginateComponent,
} from './JobList.elements';

const Filter = ({ isFilterOpen }) => {
	return (
		<FilterContainer isFilterOpen={isFilterOpen}>
			<FilterHeader>Filters</FilterHeader>
			<FilterItem>
				<FilterName>Location</FilterName>
				<FilterInput placeholder='e.g, Vadodara' />
			</FilterItem>

			<FilterItem>
				<FilterName>Job Title</FilterName>
				<FilterInput placeholder='e.g, Software Developer' />
			</FilterItem>

			<FilterItem>
				<FilterName>Experience</FilterName>
				<FilterInput placeholder='e.g, Fresher' />
			</FilterItem>

			<FilterItem>
				<FilterName>Salary</FilterName>
				<FilterRange type='range' />
			</FilterItem>

			<FilterItem>
				<SubmitBtn>Submit</SubmitBtn>
			</FilterItem>
		</FilterContainer>
	);
};

const JobList = () => {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'category', link: '/category' },
	];
	const [isFilterOpen, setisFilterOpen] = useState(false);
	const toggleFilterClick = () => {
		setisFilterOpen(!isFilterOpen);
	};
	return (
		<Container>
			<Breadcumb breadData={breadData} />
			<MainContainer>
				<FilterBtn onClick={toggleFilterClick}>
					{isFilterOpen ? 'Hide Filters' : 'Show Filters'}
				</FilterBtn>
				<Filter isFilterOpen={isFilterOpen} />
				<JobContainer>
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<PaginateComponent>
						<ReactPaginate
							previousLabel={`prev`}
							nextLabel={'next'}
							breakLabel={'...'}
							breakClassName={'break-me'}
							pageCount={5}
							marginPagesDisplayed={3}
							pageRangeDisplayed={4}
							containerClassName={'pagination'}
							subContainerClassName={'pages pagination'}
							activeClassName={'active'}
						/>
					</PaginateComponent>
				</JobContainer>
			</MainContainer>
		</Container>
	);
};

export default JobList;
