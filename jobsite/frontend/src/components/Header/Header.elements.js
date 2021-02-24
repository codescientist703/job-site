import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaHamburger, FaWindowClose } from 'react-icons/fa';

export const NavHeader = styled.header`
	box-shadow: 0px 1px 8px #888888;
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
	padding: 0.7rem 1.2rem;
`;

export const NavLogo = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	/* padding: 1rem; */
	color: #000;
	text-align: left;
	width: 100%;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: auto;
	}

`;
export const NavIcon = styled(FaHamburger)`
	font-size: 2rem;
	/* position: absolute;
	right: 20px; */
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
	width: 250px;
	height: 100%;
	position: fixed;
	/* position: absolute; */
	top: 0;
	z-index: 100;
	left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
	list-style: none;
	background: #ccc;
	align-items: center;
	flex-direction: column;
	transition: all 0.3s ease-out;
	padding: 5rem 1rem 1rem;
	
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		/* position: relative; */
		padding: 0;
		display: flex;
		justify-content: flex-end;
		position: initial;
		align-items: center;
		width: auto;
		background: initial;
		flex-direction: row;
		transition: none;
	}
`;

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	text-align: left;
	width: 100%;
	border-bottom: 2px solid transparent;
	font-size: 1.2rem;
	margin-bottom: 0.7rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: fit-content;
		margin-bottom: 0;

	}

`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	/* padding: 0.5rem 1rem; */
	height: 100%;
	color: #000;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		padding: 0 0.6rem;
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
	padding: 0;
	margin-bottom: 1.6rem;
`;
