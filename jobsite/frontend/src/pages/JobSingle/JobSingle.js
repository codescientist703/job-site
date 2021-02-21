import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
	ApplyBtn,
} from './JobSingle.elements';
import { JobCard, Container, Content, Breadcumb } from '../../components';

import React from 'react';

const JobSingle = () => {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'category', link: '/category' },
		{ name: 'job', link: '/category/jobname' },
	];
	return (
		<Container>
			<Breadcumb breadData={breadData} width={'lg'} />
			<SingleJobContainer>
				<JobTitle>Web Developer at Flipkart</JobTitle>

				<JobCard type={'single'} />
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
				<ApplyBtn>Apply Now</ApplyBtn>
			</SingleJobContainer>
		</Container>
	);
};

export default JobSingle;
