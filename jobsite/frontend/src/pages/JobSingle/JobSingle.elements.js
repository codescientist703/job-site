import styled from 'styled-components/macro';
import { Button } from '../../components';

export const JobTitle = styled.h1`
	text-align: center;
	margin: 2rem 0;
	font-size: ${({ theme }) => theme.h1}rem;
`;
export const SingleJobContainer = styled.div`
	position: relative;
	/* margin: 0 auto; */
	max-width: ${({ theme }) => theme.maxWidthMd}px;
	border: 1px solid #ddd;
	border-radius: 5px;
	/* margin-bottom: 2rem; */
	background-color: #fff;
	/* padding: 1rem; */
`;

export const Line = styled.div`
	width: 97%;
	height: 2px;
	background-color: #ddd;
	margin: 0 auto;
`;

export const ApplyBtn = styled(Button)`
	margin: 1rem;
	margin-top: 0;
`;
