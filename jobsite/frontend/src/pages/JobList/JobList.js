import { useState, useEffect } from 'react';
import { useEffectUpdate } from '../../hooks';
import { useParams } from 'react-router-dom';
import {
	Seo,
	JobCard,
	Breadcumb,
	Container,
	LayoutContainer,
	FluidContainer,
	Title,
	NoResult,
} from '../../components';
import {
	MainContainer,
	JobContainer,
	FilterBtn,
	PaginateComponent,
} from './JobList.elements';
import axios from '../../axios';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import React from 'react';

const Filter = React.lazy(() => import('../../components/Filter/Filter'));

const JobList = (props) => {
	let { categoryName } = useParams();
	const [filterData, setfilterData] = useState({
		company: '',
		location: '',
		jobtitle: '',
		salary: 0,
		experience: '',
		page: 1,
		search: props.location.state ? props.location.state.searchValue : '',
	});
	const [isFilterOpen, setisFilterOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [numPages, setNumPages] = useState(-1);
	const [is404, setIs404] = useState(false);
	const slug = props.location.state ? 'search results' : `${categoryName}`;

	const [seoData, setSeoData] = useState({
		title: '',
		description: '',
		display: '',
	});
	let isSearch = false;

	const breadData = [
		{ name: 'home', link: '/' },
		{
			name: seoData.display !== '' ? seoData.display : '',
			link: `/category/${slug}`,
		},
	];
	if (categoryName === 'search') {
		categoryName = 'all-jobs';
		isSearch = true;
	}
	useEffectUpdate(() => {
		onFilterClear();
	}, [useParams().categoryName]);

	useEffect(() => {
		async function fetchData() {
			if (is404 === true) {
				setIs404(false);
			}
			if (isLoading === false) {
				setIsLoading(true);
			}
			let apiUrl = `joblist/${categoryName}/?location=${filterData.location}&company=${filterData.company}&jobtitle=${filterData.jobtitle}&salary=${filterData.salary}&experience=${filterData.experience}&page=${filterData.page}`;
			if (isSearch) {
				apiUrl = apiUrl + `&search=${filterData.search}`;
			}
			try {
				const response = await axios.get(apiUrl);
				setSeoData({
					title: response.data.title,
					description: response.data.description,
					display: response.data.display,
				});
				setIsLoading(false);
				setData(response.data.results);
				setNumPages(Math.ceil(response.data.count / response.data.page_size));
			} catch (error) {
				setIsLoading(false);
				setIs404(true);
			}
		}
		fetchData();
	}, [filterData]);

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
			...filterData,
			company: '',
			location: '',
			jobtitle: '',
			salary: 0,
			experience: '',
			page: 1,
		});
	};

	return (
		<LayoutContainer is404={is404}>
			<Seo title={seoData.title} description={seoData.description} />
			<FluidContainer>
				<Container>
					<Breadcumb breadData={breadData} />
					<Title>{isLoading ? <Skeleton /> : seoData.title}</Title>
					<MainContainer>
						{!isLoading && (
							<FilterBtn onClick={toggleFilterClick}>
								{isFilterOpen ? 'Hide Filters' : 'Show Filters'}
							</FilterBtn>
						)}

						<Filter
							onFilterSubmit={onFilterSubmit}
							isFilterOpen={isFilterOpen}
							filterData={filterData}
							onFilterClear={onFilterClear}
							isLoading={isLoading}
							filterFor={categoryName}
						/>
						<JobContainer>
							{isLoading ? (
								[...Array(10)].map((e, i) => <JobCard key={i} />)
							) : (
								<JobCards />
							)}
							{data.length === 0 && <NoResult />}
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
				</Container>
			</FluidContainer>
		</LayoutContainer>
	);
};

export default JobList;
