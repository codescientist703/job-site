import { useState, useEffect } from 'react';
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
		search: props.location.state ? props.location.state.searchValue : '',
	});
	const [isFilterOpen, setisFilterOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [numPages, setNumPages] = useState(-1);
	const [is404, setIs404] = useState(false);
	const title = filterData.search !== '' ? 'search results' : `${categoryName}`;

	const breadData = [
		{ name: 'home', link: '/' },
		{ name: title, link: `/category/${categoryName}` },
	];
	if (categoryName === 'search') {
		categoryName = 'jobs';
	}
	useEffect(() => {
		async function fetchData() {
			if (is404 === true) {
				setIs404(false);
			}
			if (isLoading === false) {
				setIsLoading(true);
			}
			let apiUrl = `joblist/${categoryName}/?location=${filterData.location}&company=${filterData.company}&jobtitle=${filterData.jobtitle}&salary=${filterData.salary}&experience=${filterData.experience}&page=${filterData.page}`;
			if (filterData.search !== '') {
				apiUrl = apiUrl + `&search=${filterData.search}`;
			}
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
		fetchData();
	}, [filterData, categoryName]);

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
			salary: '',
			experience: '',
			page: 1,
		});
	};

	const loadData = [{}, {}, {}, {}, {}];
	console.log('fck');
	return (
		<LayoutContainer is404={is404}>
			<FluidContainer>
				<Container>
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
							isLoading={isLoading}
						/>
						<JobContainer>
							{isLoading ? (
								loadData.map((e, i) => <JobCard key={i} />)
							) : (
								<JobCards />
							)}
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
