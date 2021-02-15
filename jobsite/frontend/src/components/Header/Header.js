import React, { useState } from 'react';
import {
	NavContainer,
	NavMenu,
	NavLink,
	NavItem,
	NavLogo,
	NavIcon,
	CloseIcon,
} from './Header.elements';
import Data from './Data';
import { useMediaQuery } from 'react-responsive';

const DisplayMenu = ({ isDesktop, isOpen, handleClick }) => {
	return (
		<NavMenu isOpen={isOpen}>
			{Data.map((data, index) => (
				<NavItem key={index} onClick={handleClick}>
					<NavLink to={data.link}>{data.name}</NavLink>
				</NavItem>
			))}
			{!isDesktop && <CloseIcon onClick={handleClick} />}
		</NavMenu>
	);
};
const Header = () => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<NavContainer>
			<NavLogo to='/'>LOGO</NavLogo>
			{!isDesktop && <NavIcon onClick={handleClick} />}
			<DisplayMenu
				isDesktop={isDesktop}
				isOpen={isOpen}
				handleClick={handleClick}
			/>
		</NavContainer>
	);
};

export default Header;
