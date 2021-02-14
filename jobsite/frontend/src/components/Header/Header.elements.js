import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
`;

export const NavItem = styled.li`
	height: 80px;
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
