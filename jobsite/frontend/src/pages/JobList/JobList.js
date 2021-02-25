import React, { useState, useEffect } from 'react';
import {
	JobCard,
	Breadcumb,
	Container,
	LayoutContainer,
} from '../../components';
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
import { useParams } from 'react-router-dom';
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
	let { name } = useParams();
	const [filterData, setfilterData] = useState({
		company: '',
		location: '',
		page: '',
	});
	const [isFilterOpen, setisFilterOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [is404, set404] = useState(false);

	const toggleFilterClick = () => {
		setisFilterOpen(!isFilterOpen);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(`joblist/${name}/?location=&company=`);
				setData(response.data.results);
				setIsLoading(false);
				console.log(response.data);
			} catch (error) {
				console.log(error.request.status);
				if (error.request.status == 404) {
					set404(true);
				}
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);
	const JobCards = () => {
		return (
			<>
				{data.map((item, index) => (
					<JobCard {...item} key={index} />
				))}
			</>
		);
	};
	return (
		<Container>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<LayoutContainer is404={is404}>
					<Breadcumb breadData={breadData} />
					<MainContainer>
						<FilterBtn onClick={toggleFilterClick}>
							{isFilterOpen ? 'Hide Filters' : 'Show Filters'}
						</FilterBtn>
						<Filter isFilterOpen={isFilterOpen} />
						<JobContainer>
							<JobCards />
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
				</LayoutContainer>
			)}
		</Container>
	);
};

export default JobList;
