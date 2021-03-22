import { useState } from 'react';
import {
	NavHeader,
	NavContainer,
	NavMenu,
	NavLink,
	NavItem,
	NavLink2,
	NavLogo,
	NavIcon,
	CloseIcon,
	SideBarLogo,
	SideBarIcon,
	NavBar,
	Divider,
	SmallArrow,
	DropdownItem,
} from './Header.elements';
import { mobileData, desktopData } from '../../RawContent/HeaderContent';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '../../theme';
import Logo from '../../images/logo.png';

const NavLinkComponent = ({ isDropDown, children, link }) => {
	if (isDropDown === false)
		return (
			<NavLink
				exact
				to={link}
				activeStyle={{
					color: theme.primaryColor,
					fontWeight: '600',
				}}
			>
				{children}
			</NavLink>
		);
	else {
		return <NavLink2>{children}</NavLink2>;
	}
};

const DropDown = ({ listData, click }) => {
	return (
		<ul>
			{listData.map((item, index) => (
				<NavItem key={index} onClick={click}>
					<NavLink
						exact
						to={item.link}
						activeStyle={{
							color: theme.primaryColor,
							fontWeight: '600',
						}}
					>
						<SideBarIcon>{item.icon}</SideBarIcon>
						{item.name}
					</NavLink>
				</NavItem>
			))}
		</ul>
	);
};

const MobileItems = ({ handleClick }) => {
	return (
		<>
			{mobileData.map((data, index) => (
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
		</>
	);
};

const DesktopItems = ({ handleClick }) => {
	return (
		<>
			{desktopData.map((data, index) => (
				<NavItem key={index} onClick={handleClick}>
					<NavLinkComponent isDropDown={data.isDropDown} link={data.link}>
						<SideBarIcon>{data.icon}</SideBarIcon>
						{data.name}
						{data.isDropDown && (
							<>
								<SmallArrow />
								<DropDown listData={data.dropDownList} click={handleClick} />
							</>
						)}
					</NavLinkComponent>
				</NavItem>
			))}
		</>
	);
};
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
				{!isDesktop && <MobileItems handleClick={handleClick} />}

				{isDesktop && <DesktopItems handleClick={handleClick} />}
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
