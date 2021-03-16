import { useState, useEffect } from 'react';
import { SingleJobContainer, Line, ApplyBtn } from './JobSingle.elements';
import {
	JobCard,
	Container,
	Content,
	Breadcumb,
	FluidContainer,
	LayoutContainer,
	Title,
	Seo,
} from '../../components';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

const JobSingle = () => {
	const [data, setData] = useState({});
	const [is404, setIs404] = useState(false);

	const [isLoading, setIsLoading] = useState(true);
	let { slug } = useParams();
	const breadData = [
		{ name: 'home', link: '/' },
		{
			name: `${data.category ? data.category : ''}`,
			link: `/category/${data.category}`,
		},
		{ name: `${data.title ? data.title : ''}`, link: `/${slug}` },
	];

	useEffect(() => {
		const fetchData = async () => {
			if (is404 === true) {
				setIs404(false);
			}
			if (isLoading === false) {
				setIsLoading(true);
			}
			let apiUrl = `job/${slug}/`;
			try {
				const response = await axios.get(apiUrl);
				setIsLoading(false);
				setData(response.data);
			} catch (error) {
				setIsLoading(false);
				setIs404(true);
			}
		};
		fetchData();
	}, [slug]);
	return (
		<LayoutContainer is404={is404}>
			<Seo title={data.title} description={data.description} />
			<FluidContainer>
				<Container>
					<Breadcumb breadData={breadData} width={'lg'} />
					<Title>{data.title || <Skeleton />}</Title>
					<SingleJobContainer>
						<JobCard type={'single'} {...data} />
						<Line />
						<Content>
							{isLoading === false ? (
								<div
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								></div>
							) : (
								<Skeleton count={5} />
							)}
						</Content>
						{isLoading === false && (
							<ApplyBtn href={data.apply_link} target={'_blank'}>
								Apply Now
							</ApplyBtn>
						)}
					</SingleJobContainer>
				</Container>
			</FluidContainer>
		</LayoutContainer>
	);
};

export default JobSingle;
