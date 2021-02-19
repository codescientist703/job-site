import React from 'react';
import { JobCard, Breadcumb, Container, } from '../../components';
import {
	MainContainer,
	JobContainer,
	FilterContainer,
	FilterBtn,
	FilterItem,
	SubmitBtn,
	FilterName,
	FilterInput,
	FilterRange
} from './JobList.elements';

const Filter = () => {
	return (
		<FilterContainer>
			<FilterItem>
				<FilterName>
					Location
				</FilterName>
				<FilterInput placeholder="e.g, Vadodara" />
			</FilterItem>

			<FilterItem>
				<FilterName>
					Job Title
				</FilterName>
				<FilterInput placeholder="e.g, Software Developer" />
			</FilterItem>

			<FilterItem>
				<FilterName>
					Experience
				</FilterName>
				<FilterInput placeholder="e.g, Fresher" />
			</FilterItem>

			<FilterItem>
				<FilterName>
					Salary
				</FilterName>
				<FilterRange type="range" />
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
	return (
		<Container>
			<Breadcumb breadData={breadData} />
			<MainContainer>
				<Filter />
				<FilterBtn>Filter</FilterBtn>
				<JobContainer>
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
				</JobContainer>

			</MainContainer>

		</Container>

	);
};

export default JobList;
