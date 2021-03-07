import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const SiteFooter = styled.footer`
	background-color: #48426d;
	padding: 2.3rem 0 2rem;
	font-size: 15px;
	line-height: 24px;
	color: #fff;
`;

export const FooterContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
	padding-right: 2rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

export const AboutContainer = styled.div`
	margin-bottom: 1.5rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex: 0.6;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		justify-content: space-between;
		flex: 0.35;
	}
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		flex: 0.3;
	}
`;

export const AboutHeader = styled.h3`
	font-size: ${({ theme }) => theme.h3}rem;
	margin-bottom: 0.4rem;
`;

export const AboutDescription = styled.p``;

export const LinkHeader = styled.h3`
	font-size: ${({ theme }) => theme.h3}rem;
	margin-bottom: 0.4rem;
`;

export const LinkColumn = styled.ul`
	list-style: none;
	padding-right: 1rem;

	&:last-child {
		padding-right: 0;
	}
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: white;
`;

export const Divider = styled.hr`
	opacity: 0.5;
	margin-bottom: 0.6rem;
`;

export const DividerContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
	padding-right: 2rem;

	div {
		text-align: center;
	}
`;
