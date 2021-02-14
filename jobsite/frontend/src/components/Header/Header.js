import React from 'react';
import {
	NavContainer,
	NavMenu,
	NavLink,
	NavItem,
	NavLogo,
	NavIcon,
} from './Header.elements';
import Data from './Data';
import { useMediaQuery } from 'react-responsive';

const DisplayMenu = () => {
	return (
		<NavMenu>
			{Data.map((data, index) => (
				<NavItem key={index}>
					<NavLink to={data.link}>{data.name}</NavLink>
				</NavItem>
			))}
		</NavMenu>
	);
};

const Header = () => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return (
		<NavContainer>
			<NavLogo to='/'>LOGO</NavLogo>
			{!isDesktop && <NavIcon />}
			<DisplayMenu />
		</NavContainer>
	);
};

export default Header;
