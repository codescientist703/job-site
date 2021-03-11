import styled from 'styled-components';

export const Card = styled.div`
	padding: 0.5rem 1.4rem;
	box-shadow: ${({ type, theme }) =>
		type === 'single' ? 'none' : theme.cardShadow};
	margin: ${({ type }) => (type === 'single' ? '0.3rem' : '1.5rem')} 0;
	border-radius: 10px;
	background-color: #fff;
`;

export const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.2rem;
`;

export const CardDescription = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const CardCredits = styled.div``;

export const CardLeft = styled.div``;

export const CardRight = styled.div`
	display: ${({ type }) => (type === 'single' ? 'block' : 'none')};
`;

export const JobDetail = styled.div`
	margin: 0.2rem 0;
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

export const Contributer = styled.span`
	color: ${({ theme }) => theme.primaryColor};
	text-transform: capitalize;
	font-weight: 550;
`;
