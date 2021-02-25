import {
	SiteFooter,
	FooterContainer,
	LinkContainer,
	LinkColumn,
	AboutContainer,
	LinkHeader,
	DividerContainer,
	Divider,
	LinkItem,
} from './Footer.elements';
import data from '../../RawContent/FooterContent';
const Footer = () => {
	let dateObj = new Date();
	let curYear = dateObj.getFullYear();
	return (
		<SiteFooter>
			<FooterContainer>
				<AboutContainer>
					<h3>ABOUT</h3>
					<p>{data.description}</p>
				</AboutContainer>
				<LinkContainer>
					<LinkColumn>
						<LinkHeader>CATEGORIES</LinkHeader>
						{data.categories.map((item, index) => (
							<li key={index}>
								<LinkItem to={item.link}>{item.name}</LinkItem>
							</li>
						))}
					</LinkColumn>
					<LinkColumn>
						<LinkHeader>QUICK LINKS</LinkHeader>
						{data.quicklinks.map((item, index) => (
							<li key={index}>
								<LinkItem to={item.link}>{item.name}</LinkItem>
							</li>
						))}
					</LinkColumn>
				</LinkContainer>
			</FooterContainer>
			<DividerContainer>
				<Divider />
				<div>Copyright © ${curYear} All Rights Reserved by JobLele. </div>
			</DividerContainer>
		</SiteFooter>
	);
};

export default Footer;
