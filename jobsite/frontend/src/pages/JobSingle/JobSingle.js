import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
	JobDetails,
	About,
	Description,
	ApplyBtn,
} from './JobSingle.elements';
import { JobCard, Container, Content } from '../../components';

import React from 'react';

const JobSingle = () => {
	return (
		<Container>
			<JobTitle>Web Developer at Flipkart</JobTitle>

			<SingleJobContainer>
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
