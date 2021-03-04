import { useState, useEffect } from 'react';
import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
} from './JobExperienceSingle.elements';
import {
	Container,
	Content,
	Breadcumb,
	ExperienceCard,
	FluidContainer,
	LayoutContainer,
} from '../../components';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import Skeleton from 'react-loading-skeleton';

const JobExperienceSingle = () => {
	const [data, setData] = useState({});
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'experience', link: '/job-experience' },
		{ name: data.company ? data.company : '', link: '/job-experience/exp' },
	];
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
		<LayoutContainer is404={is404}>
			<FluidContainer>
				<Container>
					<Breadcumb breadData={breadData} width={'lg'} />
					<JobTitle>
						{isLoading ? (
							<Skeleton />
						) : (
							`Interview experience for ${data.company}`
						)}
					</JobTitle>
					<SingleJobContainer>
						<ExperienceCard type={'single'} {...data} />
						{isLoading === false && <ShareIcon />}
						<Line />
						<Content>
							{isLoading ? (
								<Skeleton count={5} />
							) : (
								<div
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								></div>
							)}
						</Content>
					</SingleJobContainer>
				</Container>
			</FluidContainer>
		</LayoutContainer>
	);
};

export default JobExperienceSingle;
