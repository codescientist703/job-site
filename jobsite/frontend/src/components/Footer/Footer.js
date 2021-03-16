import {
	SiteFooter,
	FooterContainer,
	FooterTop,
	FooterBottom,
	LinkContainer,
	LinkColumn,
	AboutContainer,
	AboutHeader,
	AboutDescription,
	LinkHeader,
	DividerContainer,
	Divider,
	LinkItem,
	LinkList,
	LastLine,
	HeartIcon,
	CopyRight,
} from './Footer.elements';
import data from '../../RawContent/FooterContent';
const Footer = () => {
	let dateObj = new Date();
	let curYear = dateObj.getFullYear();
	return (
		<SiteFooter>
			<FooterContainer>
				<FooterTop>
					<AboutContainer>
						<AboutHeader>ABOUT</AboutHeader>
						<AboutDescription>{data.description}</AboutDescription>
					</AboutContainer>
					<LinkContainer>
						<LinkColumn>
							<LinkHeader>CATEGORIES</LinkHeader>
							<LinkList>
								{data.categories.map((item, index) => (
									<li key={index}>
										<LinkItem to={item.link}>{item.name}</LinkItem>
									</li>
								))}
							</LinkList>
						</LinkColumn>
						<LinkColumn>
							<LinkHeader>QUICK LINKS</LinkHeader>
							<LinkList>
								{data.quicklinks.map((item, index) => (
									<li key={index}>
										<LinkItem to={item.link}>{item.name}</LinkItem>
									</li>
								))}
							</LinkList>
						</LinkColumn>
					</LinkContainer>
				</FooterTop>
				<FooterBottom>
					<DividerContainer>
						<Divider />
						<CopyRight>
							Copyright © {curYear} | All Rights Reserved by JobDundho.{' '}
						</CopyRight>
					</DividerContainer>
					<LastLine>
						Made with <HeartIcon /> in INDIA
					</LastLine>
				</FooterBottom>
			</FooterContainer>
		</SiteFooter>
	);
};

export default Footer;
