import React, { useState } from 'react';
import {
	NavHeader,
	NavContainer,
	NavMenu,
	NavLink,
	NavItem,
	NavLogo,
	NavIcon,
	CloseIcon,
	SideBarLogo,
	SideBarIcon,
} from './Header.elements';
import Data from '../../RawContent/HeaderContent';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const DisplayMenu = ({ isDesktop, isOpen, handleClick }) => {
	return (
		<NavMenu isOpen={isOpen}>
			{!isDesktop && <SideBarLogo to='/'>LOGO</SideBarLogo>}
			{Data.map((data, index) => (
				<NavItem key={index} onClick={handleClick}>
					<NavLink
						exact
						to={data.link}
						activeStyle={{
							color: '#00b0ff',
							fontWeight: '600',
						}}
					>
						<SideBarIcon>{data.icon}</SideBarIcon>
						{data.name}
					</NavLink>
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
		<NavHeader>
			<NavContainer>
				<NavLogo to='/'>LOGO</NavLogo>
				<NavIcon onClick={handleClick} />
				<DisplayMenu
					isDesktop={isDesktop}
					isOpen={isOpen}
					handleClick={handleClick}
				/>
			</NavContainer>
		</NavHeader>
	);
};

export default Header;
