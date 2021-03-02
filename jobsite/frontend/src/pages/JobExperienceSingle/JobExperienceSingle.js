import { useState, useEffect } from 'react';
import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
	About,
	ApplyBtn,
} from './JobExperienceSingle.elements';
import {
	JobCard,
	Container,
	Content,
	Breadcumb,
	ExperienceCard,
	FluidContainer,
	LayoutContainer,
} from '../../components';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import React from 'react';

const JobExperienceSingle = () => {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'experience', link: '/job-experience' },
		{ name: 'singlejob expereince', link: '/job-experience/exp' },
	];
	const [data, setData] = useState({});
	const [is404, setIs404] = useState(false);

	const [isLoading, setIsLoading] = useState(true);
	let { slug } = useParams();
	const fetchData = async () => {
		if (is404 === true) {
			setIs404(false);
		}
		if (isLoading === false) {
			setIsLoading(true);
		}
		let apiUrl = `interview/${slug}`;
		try {
			const response = await axios.get(apiUrl);
			setIsLoading(false);
			setData(response.data);
		} catch (error) {
			setIsLoading(false);
			setIs404(true);
		}
	};

	useEffect(() => {
		fetchData();
	}, [slug]);
	return (
		<FluidContainer>
			<Container>
				{isLoading ? (
					<div>Loading..</div>
				) : (
					<LayoutContainer>
						<Breadcumb breadData={breadData} width={'lg'} />
						<JobTitle>Interview Experience for Flipkart</JobTitle>
						<SingleJobContainer>
							<ExperienceCard type={'single'} {...data} />
							<ShareIcon />
							<Line />
							<Content>
								<div
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								></div>
							</Content>
						</SingleJobContainer>
					</LayoutContainer>
				)}
			</Container>
		</FluidContainer>
	);
};

export default JobExperienceSingle;
