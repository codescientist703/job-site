import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
	JobDetails,
	About,
	Description,
	ApplyBtn
} from './JobSingle.elements';
import { JobCard, Container } from '../../components';

import React from 'react';

const JobSingle = () => {
	return (
		<Container>
			<JobTitle>
				Web Developer at Flipkart
			</JobTitle>

			<SingleJobContainer>

				<JobCard type={'single'} />
				<ShareIcon />
				<Line />
				<JobDetails>
					<About>About</About>
					<Description>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, voluptates dolores. Harum illo cumque nisi provident, molestiae perspiciatis quaerat aliquam maxime, facilis quidem at minima quae consequatur et ipsam veritatis!
					</Description>
					<ApplyBtn>Apply Now</ApplyBtn>
				</JobDetails>

			</SingleJobContainer>

		</Container>
	);
};

export default JobSingle;
