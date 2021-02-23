import styled from 'styled-components/macro';
import { FiShare2 } from 'react-icons/fi';
import { Button, Breadcumb } from '../../components';

export const JobTitle = styled.h1`
	text-align: center;
	margin: 2rem 0;
	font-size: 2rem;
`;
export const SingleJobContainer = styled.div`
	position: relative;
	/* margin: 0 auto; */
	max-width:  ${({ theme }) => theme.maxWidthSm}px;
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

export const ApplyBtn = styled(Button)`
	margin: 1rem 1rem;
`;
