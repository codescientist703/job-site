import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavLogo = styled(Link)`
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
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
	&:hover {
		border-bottom: 2px solid #4b59f7;
	}
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
`;
