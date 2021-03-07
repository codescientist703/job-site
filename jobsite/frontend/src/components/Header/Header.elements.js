import styled from 'styled-components/macro';
import { NavLink as NavvLink, Link } from 'react-router-dom';
import { FaHamburger, FaWindowClose } from 'react-icons/fa';

export const NavHeader = styled.header`
	position: relative;
	z-index: 1000;
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
	width: 100%;
`;

export const NavContainer = styled.nav`
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
	width: 100%;

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

export const CloseIcon = styled(FaWindowClose)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 1.5rem;
`;

export const NavMenu = styled.ul`
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 100;
	left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
	list-style: none;
	background: #ccc;
	transition: all 0.3s ease-out;
	padding: 5rem 1rem 1rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		flex-direction: row;
		/* align-items: center; */
		position: initial;
		padding: 0;
		width: auto;
		height: fit-content;
		background: initial;
		transition: none;
	}
`;

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	text-align: left;
	width: 100%;
	font-size: 1.125rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: fit-content;
		margin-bottom: 0;
		padding: 0.2rem 0.6rem;
		border-radius: 5px;
		transition: 0.3s;

		&:hover {
			/* background-color: #00b0ff; */
		}

		&:hover > .Headerelements__NavLink-vjhw7q-7 {
			color: #00b0ff;
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
		/* background-color: #00b0ff; */
		/* color: #fff; */
		color: #00b0ff;
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
	margin-right: 0.5rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: none;
	}
`;

export const SideBarLogo = styled(NavLogo)`
	padding: 0 0.6rem;
	margin-bottom: 1.6rem;
`;
