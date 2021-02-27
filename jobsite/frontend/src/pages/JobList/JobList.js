import React, { useState, useEffect } from 'react';
import {
	JobCard,
	Breadcumb,
	Container,
	Filter,
	LayoutContainer,
} from '../../components';
import {
	MainContainer,
	JobContainer,
	FilterBtn,
	PaginateComponent,
} from './JobList.elements';
import axios from '../../axios';
import ReactPaginate from 'react-paginate';

import { useParams } from 'react-router-dom';

const JobList = (props) => {
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
	const [is404, setIs404] = useState(false);

	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'category', link: '/category' },
	];

	if (props.location.state) {
		console.log(props.location.state.haha);
	}

	let { categoryName } = useParams();
	if (categoryName === 'search') {
		categoryName = 'jobs';
	}

	async function fetchData() {
		if (is404 === true) {
			setIs404(false);
		}
		if (isLoading === false) {
			setIsLoading(true);
		}
		let apiUrl = `joblist/${categoryName}/?location=${filterData.location}&company=${filterData.company}&jobtitle=${filterData.jobtitle}&salary=${filterData.salary}&experience=${filterData.experience}&page=${filterData.page}`;
		try {
			const response = await axios.get(apiUrl);
			setData(response.data.results);
			setIsLoading(false);
			setNumPages(Math.ceil(response.data.count / response.data.page_size));
		} catch (error) {
			setIsLoading(false);
			setIs404(true);
		}
	}

	useEffect(() => {
		fetchData();
	}, [filterData.page, categoryName]);

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
	// const onChange = (e) =>
	// 	setfilterData({ ...filterData, [e.target.name]: e.target.value });

	const onFilterSubmit = () => {
		if (filterData.page === 1) {
			fetchData();
		} else {
			setfilterData({ ...filterData, page: 1 });
		}
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
						<Filter
							onFilterSubmit={onFilterSubmit}
							isFilterOpen={isFilterOpen}
							filterData={filterData}
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
				</LayoutContainer>
			)}
		</Container>
	);
};

export default JobList;
