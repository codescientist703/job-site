import React, { useState, useEffect } from 'react';
import {
	JobTitle,
	SingleJobContainer,
	Line,
	ShareIcon,
	ApplyBtn,
} from './JobSingle.elements';
import {
	JobCard,
	Container,
	Content,
	Breadcumb,
	FluidContainer,
	LayoutContainer,
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
		{ name: `${data.category}`, link: `/category/${data.category}` },
		{ name: `${data.title}`, link: `/${slug}` },
	];

	const fetchData = async () => {
		if (is404 === true) {
			setIs404(false);
		}
		if (isLoading === false) {
			setIsLoading(true);
		}
		let apiUrl = `job/${slug}`;
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
				<Breadcumb breadData={breadData} width={'lg'} />
				<LayoutContainer is404={is404}>
					<JobTitle>{data.title || <Skeleton />}</JobTitle>
					<SingleJobContainer>
						<JobCard type={'single'} {...data} />
						{isLoading === false && <ShareIcon />}
						<Line />
						<Content>
							{data.content ? (
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
				</LayoutContainer>
			</Container>
		</FluidContainer>
	);
};

export default JobSingle;
