import styled from 'styled-components/macro';
import { FiShare2 } from 'react-icons/fi';
import { Button } from '../../components';
export const JobTitle = styled.h2`
	text-align: center;
	margin: 2rem 0;
`;

export const SingleJobContainer = styled.div`
	position: relative;
	margin: 0 auto;
	max-width: 1024px;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin-bottom: 2rem;
`;

export const ShareIcon = styled(FiShare2)`
	position: absolute;
	right: 1rem;
	margin-top: -1.8rem;
	font-size: 1.2rem;
`;

export const Line = styled.div`
	width: 97%;
	height: 2px;
	background-color: #ddd;
	margin: 0 auto;
`;

export const JobDetails = styled.section`
	padding: 0.7rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 0.7rem 1.2rem;
	}
`;

export const About = styled.h4`
	font-size: 1.1rem;
	margin-bottom: 1rem;
`;

export const Description = styled.p``;

export const ApplyBtn = styled(Button)`
	margin: 1rem 1rem;
`;
