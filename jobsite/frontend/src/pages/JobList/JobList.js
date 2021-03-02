import React, { useState, useEffect } from 'react';
import {
	JobCard,
	Breadcumb,
	Container,
	Filter,
	LayoutContainer,
	FluidContainer,
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
	let { categoryName } = useParams();
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
		{ name: 'category', link: `/category/${categoryName}` },
	];

	if (props.location.state) {
		console.log(props.location.state.haha);
	}

	if (categoryName === 'search') {
		categoryName = 'jobs';
	}
	useEffect(() => {
		fetchData();
	}, [filterData, categoryName]);

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
		setfilterData({
			...filterData,
			page: data.selected + 1,
		});
	};
	const onFilterSubmit = (name, value) => {
		setfilterData({ ...filterData, [name]: value, page: 1 });
	};
	const onFilterClear = () => {
		setfilterData({
			company: '',
			location: '',
			jobtitle: '',
			salary: '',
			experience: '',
			page: 1,
		});
	};

	return (
		<FluidContainer>
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
								onFilterClear={onFilterClear}
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
		</FluidContainer>
	);
};

export default JobList;
