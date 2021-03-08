import styled from 'styled-components/macro';
import { Button } from '../../components';

export const JobTitle = styled.h1`
	text-align: center;
	margin: ${({ theme }) => theme.titleMargin};
	font-size: ${({ theme }) => theme.h1}rem;
`;

export const SingleJobContainer = styled.div`
	position: relative;
	max-width: ${({ theme }) => theme.maxWidthMd}px;
	border: 1px solid #ddd;
	border-radius: 5px;
	background-color: #fff;
`;

export const Line = styled.div`
	width: 97%;
	height: 2px;
	background-color: #ddd;
	margin: 0.5rem auto 0;
`;

export const ApplyBtn = styled(Button)`
	margin: 1rem;
	margin-top: 0;
`;
