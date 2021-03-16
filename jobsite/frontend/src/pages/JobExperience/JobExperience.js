import { useState, useEffect } from 'react';
import { Paragraph } from './JobExperience.elements';
import {
	Breadcumb,
	ExperienceCard,
	FluidContainer,
	Container,
	Seo,
	Title,
} from '../../components';
import axios from '../../axios';
import { PaginateComponent } from '../JobList/JobList.elements';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';

function JobExperience() {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'interview experiences', link: '/interview-experience' },
	];
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [numPages, setNumPages] = useState(-1);
	const [isLoading, setIsLoading] = useState(true);
	const [seoData, setSeoData] = useState({
		title: '',
		description: '',
	});

	const ExperienceCards = () => {
		return (
			<>
				{data.map((item, index) => (
					<ExperienceCard {...item} key={index} />
				))}
			</>
		);
	};

	const handlePageClick = (data) => {
		setPage(data.selected + 1);
	};
	useEffect(() => {
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
				setSeoData({
					title: response.data.title,
					description: response.data.description,
				});
			} catch (error) {
				setIsLoading(false);
			}
		}
		fetchData();
	}, [page]);

	return (
		<FluidContainer>
			<Seo title={seoData.title} description={seoData.description} />
			<Container>
				<Breadcumb breadData={breadData} />
				<Title>{isLoading ? <Skeleton /> : seoData.title}</Title>
				<Paragraph>{isLoading ? <Skeleton /> : seoData.description}</Paragraph>
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
