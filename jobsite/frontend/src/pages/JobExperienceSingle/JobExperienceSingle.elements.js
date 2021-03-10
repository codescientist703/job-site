import styled from 'styled-components/macro';
import { FiShare2 } from 'react-icons/fi';
import { Button } from '../../components';

export const SingleJobContainer = styled.div`
	position: relative;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin-bottom: 2rem;
	background-color: #fff;
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

export const ApplyBtn = styled(Button)`
	margin: 1rem;
`;

export const About = styled.h3`
	margin-bottom: 0.3rem;
`;
