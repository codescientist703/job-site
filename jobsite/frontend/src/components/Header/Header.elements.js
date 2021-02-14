import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	font-size: 1.2rem;
	padding-right: 8rem;
	box-shadow: 0px 1px 8px #888888;
`;

export const NavLogo = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	padding: 1rem;
	color: #000;
`;
export const NavIcon = styled(FaHamburger)`
	font-size: 2rem;
	position: absolute;
	right: 20px;
`;

export const NavMenu = styled.ul`
	display: flex;
	width: 200px;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	list-style: none;
	background: grey;
	align-items: center;
	flex-direction: column;
	@media screen and (min-width: 992px) {
		display: flex;
		justify-content: flex-end;
		position: initial;
		align-items: center;
		width: 100%;
		background: initial;
		flex-direction: row;
	}
`;

export const NavItem = styled.li`
	border-bottom: 2px solid transparent;
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	color: #000;
`;
