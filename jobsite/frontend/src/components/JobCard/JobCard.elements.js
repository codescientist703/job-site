import styled from 'styled-components/macro';

export const Card = styled.div`
	/* for mobile */
	width: 100%;
	box-shadow: ${({ type, theme }) =>
		type === 'single' ? 'none' : theme.cardShadow};
	margin: 0 auto;
	padding: 0.7rem;
	border-radius: 10px;
	margin-bottom: ${({ type }) => (type === 'single' ? '0' : '1.5rem')};
	background-color: #fff;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 0.7rem 1.2rem;
	}
`;

export const CardTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

export const CardMiddle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${({ type }) => (type === 'single' ? '0.5rem' : '1.5rem')};
	max-width: 700px;
`;

export const CardBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const JobDetails = styled.div``;

export const ShareIconDiv = styled.div`
	display: ${({ type }) => (type === 'single' ? 'block' : 'none')};
`;

export const JobTitle = styled.p``;

export const JobCompany = styled.h3`
	font-size: 1.1rem;
	letter-spacing: 1px;
`;

export const Item = styled.div``;

export const ItemTitle = styled.p`
	font-weight: 550;
	font-size: 0.85rem;
`;

export const ItemIcon = styled.i`
	vertical-align: middle;
	margin-right: 0.3rem;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: initial;
	}
`;

export const ItemDescription = styled.p`
	font-size: 0.7rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 0.8rem;
	}
`;

export const JobTag = styled.div`
	font-size: 0.85rem;
	border: 1px solid ${({ theme }) => theme.primaryColor};
	padding: 0.3rem 0.7rem;
	color: ${({ theme }) => theme.primaryColor};
	border-radius: 30px;
`;
