import React from 'react';
import {
	NavContainer,
	NavMenu,
	NavLink,
	NavItem,
	NavLogo,
} from './Header.elements';

const Header = () => {
	return (
		<NavContainer>
			<NavLogo />
			<NavMenu>
				<NavItem>
					<NavLink>Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Contact</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>About</NavLink>
				</NavItem>
			</NavMenu>
		</NavContainer>
	);
};

export default Header;
