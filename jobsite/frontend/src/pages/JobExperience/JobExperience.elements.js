import styled from 'styled-components';

export const Title = styled.h1`
	text-align: center;
	margin: ${({ theme }) => theme.titleMargin};
	font-size: ${({ theme }) => theme.h1}rem;
	font-weight: ${({ theme }) => theme.titleWeight};
`;

export const Paragraph = styled.p`
	margin-bottom: 0.7rem;
	font-size: ${({ theme }) => theme.p}rem;
`;
