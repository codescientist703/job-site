import React from 'react';
import {
	NavContainer,
	NavMenu,
	NavLink,
	NavItem,
	NavLogo,
} from './Header.elements';
import Data from './Data';

const DesktopMenu = () => {
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
	return (
		<NavContainer>
			<NavLogo to='/'>LOGO</NavLogo>
			<DesktopMenu />
		</NavContainer>
	);
};

export default Header;
