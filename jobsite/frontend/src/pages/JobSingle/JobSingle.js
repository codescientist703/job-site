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
import { useParams } from 'react-router-dom';
import axios from '../../axios';

const JobSingle = () => {
	const [data, setData] = useState({});
	const [is404, setIs404] = useState(false);

	const [isLoading, setIsLoading] = useState(true);
	let { slug } = useParams();
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'category', link: `/category/${data.category}` },
		{ name: 'job', link: `/${slug}` },
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
				{isLoading ? (
					<div>Loading..</div>
				) : (
					<LayoutContainer is404={is404}>
						<Breadcumb breadData={breadData} width={'lg'} />
						<JobTitle>{data.title}</JobTitle>
						<SingleJobContainer>
							<JobCard type={'single'} {...data} />
							<ShareIcon />
							<Line />
							<Content>
								<div
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								></div>
							</Content>
							<ApplyBtn href={data.apply_link} target={'_blank'}>
								Apply Now
							</ApplyBtn>
						</SingleJobContainer>
					</LayoutContainer>
				)}
			</Container>
		</FluidContainer>
	);
};

export default JobSingle;
