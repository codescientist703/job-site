import styled from 'styled-components';

export const SiteFooter = styled.footer`
	background-color: #f8f8ff;
	padding: 2.3rem 0 1.5rem;
	font-size: 15px;
	line-height: 24px;
	color: #000;
`;

export const FooterContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
	padding-left: 2rem;
	padding-right: 2rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex-direction: row;
	}
`;
export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 1rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding-left: 2rem;
		justify-content: space-around;
	}
`;

export const LinkHeader = styled.h3``;
export const AboutContainer = styled.div`
	margin-bottom: 1.5rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
	}
`;
export const LinkColumn = styled.ul`
	list-style: none;
	padding-right: 1rem;
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
`;
