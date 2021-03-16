import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { RiHeart2Fill } from 'react-icons/ri';

export const SiteFooter = styled.footer`
	background-color: #48426d;
	padding: 2.3rem 0 0.8rem;
	color: #fff;
`;

export const FooterContainer = styled.div`
	max-width: ${({ theme }) => theme.maxWidthLg}px;
	margin: 0 auto;
	padding: 0 ${({ theme }) => theme.homePaddingLR};
`;

export const FooterTop = styled.section`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

export const FooterBottom = styled.section``;

export const AboutContainer = styled.div`
	margin-bottom: 1.5rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex: 0.6;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 1rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		justify-content: space-between;
		flex: 0.35;
	}
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		flex: 0.3;
	}
`;

export const AboutHeader = styled.h4`
	font-size: ${({ theme }) => theme.h4}rem;
	margin-bottom: 0.4rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: ${({ theme }) => theme.h3}rem;
	}
`;

export const AboutDescription = styled.p`
	font-size: 0.85rem;
	text-align: justify;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 0.925rem;
	}
`;

export const LinkHeader = styled.h4`
	font-size: ${({ theme }) => theme.h4}rem;
	margin-bottom: 0.4rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: ${({ theme }) => theme.h3}rem;
	}
`;

export const LinkColumn = styled.div`
	list-style: none;
	padding-right: 1rem;

	&:last-child {
		padding-right: 0;
	}
`;

export const LinkList = styled.ul`
	list-style: none;
`;

export const LinkItem = styled(Link)`
	font-size: 0.85rem;

	text-decoration: none;
	color: white;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 0.925rem;
	}
`;

export const DividerContainer = styled.div``;

export const Divider = styled.hr`
	opacity: 0.5;
	margin-bottom: 0.8rem;
`;

export const CopyRight = styled.p`
	text-align: center;
	font-size: ${({ theme }) => theme.p}rem;
`;

export const LastLine = styled.p`
	margin-top: 0.5rem;
	text-align: center;
	font-size: ${({ theme }) => theme.p}rem;
`;

export const HeartIcon = styled(RiHeart2Fill)`
	margin: 0 0.2rem -0.2rem;
	font-size: 1.1rem;
	color: red;
`;
