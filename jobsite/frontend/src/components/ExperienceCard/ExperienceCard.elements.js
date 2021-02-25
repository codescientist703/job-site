import styled from 'styled-components';

export const Card = styled.div`
	padding: 0.5rem 1.3rem;
	box-shadow: ${({ type }) =>
		type === 'single' ? 'none' : '0 2px 7px rgba(0, 0, 0, 0.2)'};
	margin: 1.2rem 0;
	border-radius: 10px;
`;

export const CardHeader = styled.div`
	margin-top: 0.2rem;
`;

export const CardDescription = styled.div`
	margin-top: 1.3rem;
	display: flex;
	align-items: flex-start;
`;

export const CardCredits = styled.div`
	margin-top: 1.3rem;
	margin-bottom: 0.5rem;
`;

export const JobDetail = styled.div`
	display: flex;
	align-items: center;
`;

export const JobRole = styled.p``;

export const CompanyName = styled.h3`
	letter-spacing: 1px;
`;

export const Paragraph = styled.p``;

export const Icon = styled.i`
	font-size: 1.1rem;
	margin-right: 0.5rem;
	margin-top: 0.2rem;
	vertical-align: middle;
`;

export const ReadMore = styled.a`
	padding-left: 0.7rem;
	color: ${({ theme }) => theme.link.color};
	font-weight: 500;
	transition: ${({ theme }) => theme.link.transition};

	&:hover{
		color: ${({ theme }) => theme.link.hover.color};
	}
`;

export const Contributer = styled.span`
	color: green;
	font-weight: 550;
`;
