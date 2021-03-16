import styled from 'styled-components/macro';
import { NavLink as NavvLink } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export const NavHeader = styled.header`
	position: relative;
	z-index: 1000;
	box-shadow: ${({ theme }) => theme.cardShadow};
	width: 100%;
`;

export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	font-size: 1.1rem;
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidthLg}px;
	margin: 0 auto;
	padding: 0.7rem ${({ theme }) => theme.homePaddingLR};
`;

export const NavLogo = styled(NavvLink)`
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	color: #000;
	text-align: left;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: auto;
	}
`;

export const NavIcon = styled(FaHamburger)`
	font-size: 2rem;
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: none;
	}
`;

export const CloseIcon = styled(IoClose)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 1.8rem;
	cursor: pointer;
`;

export const NavMenu = styled.ul`
	position: relative;
	top: 0;
	left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100%;
	background: #e2eafc;
	padding: 5rem 1rem 1rem;
	list-style: none;
	transition: all 0.3s ease;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		flex-direction: row;
		height: fit-content;
		width: auto;
		background: initial;
		padding: 0;
		position: initial;
		transition: none;
	}
`;

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	text-align: left;
	width: 100%;
	font-size: 1rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: fit-content;
		margin-bottom: 0;
		padding: 0.2rem 0.6rem;
		border-radius: 5px;
		transition: 0.3s;
		font-size: 1.08rem;

		&:hover > .Headerelements__NavLink-vjhw7q-7 {
			color: ${({ theme }) => theme.primaryColor};
		}
	}
`;

export const NavLink = styled(NavvLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	outline: none;
	padding: 0.2rem 0.6rem;
	height: 100%;
	color: #000;
	transition: 0.3s;
	width: 100%;
	border-radius: 5px;

	&:hover {
		color: ${({ theme }) => theme.primaryColor};
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		padding: 0;

		&:hover {
			background-color: transparent;
			color: initial;
		}
	}
`;

export const SideBarIcon = styled.div`
	margin-top: 0.2rem;
	margin-right: 0.9rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: none;
	}
`;

export const SideBarLogo = styled(NavLogo)`
	padding: 0 0.6rem;
	margin-bottom: 1.6rem;
`;

export const NavBar = styled.nav`
	position: fixed;
	top: 0;
	left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
	z-index: 100;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		background: initial;
		position: initial;
		width: auto;
		height: fit-content;
	}
`;
