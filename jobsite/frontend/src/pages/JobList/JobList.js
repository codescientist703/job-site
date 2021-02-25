import React, { useState, useEffect } from 'react';
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
import axios from '../../axios';
import { useParams, useHistory } from 'react-router-dom';

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

const JobList = (props) => {
	let history = useHistory();
	if (props.location.state) {
		console.log(props.location.state.haha);
	}

	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'category', link: '/category' },
	];
	let { name } = useParams();
	if (name === 'search') {
		name = 'jobs';
	}
	const [filterData, setfilterData] = useState({
		company: '',
		location: '',
		jobtitle: '',
		salary: '',
		experience: '',
		page: 1,
	});

	const [isFilterOpen, setisFilterOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [numPages, setNumPages] = useState(-1);

	async function fetchData(type) {
		if (isLoading === false) {
			setIsLoading(true);
		}
		let apiUrl = `joblist/${name}/?location=${filterData.location}&company=${filterData.company}&jobtitle=${filterData.jobtitle}&salary=${filterData.salary}&experience=${filterData.experience}&page=${filterData.page}`;
		try {
			const response = await axios.get(apiUrl);
			setData(response.data.results);
			setIsLoading(false);
			// if (numPages === -1 || type === 'filter') {
			setNumPages(Math.ceil(response.data.count / response.data.page_size));
		} catch (error) {
			setIsLoading(false);
			history.push('/404');
		}
	}
	useEffect(() => {
		fetchData('pagination');
	}, [filterData.page]);

	const JobCards = () => {
		return (
			<>
				{data.map((item, index) => (
					<JobCard {...item} key={index} />
				))}
			</>
		);
	};
	const toggleFilterClick = () => {
		setisFilterOpen(!isFilterOpen);
	};
	const handlePageClick = (data) => {
		setfilterData({ ...filterData, page: data.selected + 1 });
	};
	const onChange = (e) =>
		setfilterData({ ...filterData, [e.target.name]: e.target.value });

	const onFilterSubmit = () => {
		if (filterData.page === 1) {
			fetchData();
		} else {
			setfilterData({ ...filterData, page: 1 });
		}
	};
	console.log(filterData.page);
	return (
		<Container>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<Breadcumb breadData={breadData} />
					<MainContainer>
						<FilterBtn onClick={toggleFilterClick}>
							{isFilterOpen ? 'Hide Filters' : 'Show Filters'}
						</FilterBtn>
						<Filter
							isFilterOpen={isFilterOpen}
							filterData={filterData}
							onChange={onChange}
							onFilterSubmit={onFilterSubmit}
						/>
						<JobContainer>
							<JobCards />
							<PaginateComponent>
								<ReactPaginate
									previousLabel={`prev`}
									nextLabel={'next'}
									breakLabel={'...'}
									breakClassName={'break-me'}
									pageCount={numPages}
									marginPagesDisplayed={3}
									pageRangeDisplayed={2}
									onPageChange={handlePageClick}
									containerClassName={'pagination'}
									subContainerClassName={'pages pagination'}
									activeClassName={'active'}
									disabledClassName={'disabled'}
									forcePage={filterData.page - 1}
								/>
							</PaginateComponent>
						</JobContainer>
					</MainContainer>
				</>
			)}
		</Container>
	);
};

export default JobList;
