import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import { Title, Paragraph } from './JobExperience.elements';
import { Breadcumb, ExperienceCard, FluidContainer } from '../../components';
import axios from '../../axios';
import { PaginateComponent } from '../JobList/JobList.elements';
import ReactPaginate from 'react-paginate';

function JobExperience() {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'Job experiences', link: '/job-experience' },
	];
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [numPages, setNumPages] = useState(-1);
	const [isLoading, setIsLoading] = useState(true);

	const ExperienceCards = () => {
		return (
			<>
				{data.map((item, index) => (
					<ExperienceCard {...item} key={index} />
				))}
			</>
		);
	};

	async function fetchData() {
		if (isLoading === false) {
			setIsLoading(true);
		}
		let apiUrl = `interviewlist/?page=${page}`;
		try {
			const response = await axios.get(apiUrl);
			setData(response.data.results);
			setIsLoading(false);
			setNumPages(Math.ceil(response.data.count / response.data.page_size));
		} catch (error) {
			setIsLoading(false);
		}
	}
	const handlePageClick = (data) => {
		setPage(data.selected + 1);
	};
	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<FluidContainer>
			<Container>
				<Breadcumb breadData={breadData} />
				<Title>Interview Experiences</Title>
				<Paragraph>
					Find interview experiences of your dream company hear!!
				</Paragraph>
				{isLoading ? (
					<>
						{[...Array(10)].map((e, i) => (
							<ExperienceCard key={i} />
						))}
					</>
				) : (
					<ExperienceCards />
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
						forcePage={page - 1}
					/>
				</PaginateComponent>
			</Container>
		</FluidContainer>
	);
}

export default JobExperience;
