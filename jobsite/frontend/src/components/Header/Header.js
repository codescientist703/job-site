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
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
const DisplayMenu = ({ isDesktop, isOpen, handleClick }) => {
	return (
		<NavMenu isOpen={isOpen}>
			{!isDesktop && (
				<NavItem>
					<NavLogo to='/'>LOGO</NavLogo>
				</NavItem>
			)}
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
	const [isOpen, setIsOpen] = useState(false);
	const themeContext = useContext(ThemeContext);
	const isDesktop = useMediaQuery({ minWidth: themeContext.lg });

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
