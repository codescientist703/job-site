import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
	ApplyBtn,
} from './JobExperienceSingle.elements';
import {
	JobCard,
	Container,
	Content,
	Breadcumb,
	ExperienceCard,
} from '../../components';

import React from 'react';

const JobExperienceSingle = () => {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'job-experience', link: '/job-experience' },
		{ name: 'singlejob expereince', link: '/job-experience/exp' },
	];
	return (
		<Container>
			<Breadcumb breadData={breadData} width={'lg'} />
			<JobTitle>Interview Experience for Flipkart</JobTitle>
			<SingleJobContainer>
				<ExperienceCard type={'single'} />
				<ShareIcon />
				<Line />
				<Content>
					<h1>About</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
						dolorum quisquam aperiam distinctio dicta sunt odio veritatis optio,
						placeat exercitationem blanditiis saepe excepturi, nostrum id est
						hic fugit itaque voluptatum!
					</p>
					<p>peletegues romane conti des</p>
					<a href='sdf'>sdsdf</a>
				</Content>
			</SingleJobContainer>
		</Container>
	);
};

export default JobExperienceSingle;
