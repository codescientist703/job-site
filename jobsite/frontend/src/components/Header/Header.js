import { useState } from 'react';
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
	NavBar,
	Divider,
} from './Header.elements';
import Data from '../../RawContent/HeaderContent';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '../../theme';
import Logo from '../../images/logo.png';

const DisplayMenu = ({ isDesktop, isOpen, handleClick }) => {
	return (
		<NavBar isOpen={isOpen} onClick={handleClick}>
			<NavMenu isOpen={isOpen}>
				{!isDesktop && (
					<SideBarLogo to='/'>
						<img src={Logo} />
					</SideBarLogo>
				)}
				{!isDesktop && <Divider />}
				{Data.map((data, index) => (
					<NavItem key={index} onClick={handleClick}>
						<NavLink
							exact
							to={data.link}
							activeStyle={{
								color: theme.primaryColor,
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
		</NavBar>
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
				<NavLogo to='/'>
					<img src={Logo} />
				</NavLogo>
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
