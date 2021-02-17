import {
	SiteFooter,
	FooterContainer,
	LinkContainer,
	LinkColumn,
	AboutContainer,
	LinkHeader,
	DividerContainer,
	Divider,
} from './Footer.elements';

const Footer = () => {
	let dateObj = new Date();
	let curYear = dateObj.getFullYear();
	return (
		<SiteFooter>
			<FooterContainer>
				<AboutContainer>
					<h3>ABOUT</h3>
					<p>
						Ham log ne ye job site banayi hai taki jobless log kam ho jaye or
						unhe job mil jaye.Tum logo direct hi job dubh payuge or tumhe koi
						mehnat nahi karni padegi. Bewakoof log bhi iss job site ka istamal
						kar sakte hai. Tu agar app Bewakoof to jaroor use ki jiye.
					</p>
				</AboutContainer>
				<LinkContainer>
					<LinkColumn>
						<LinkHeader>CATEGORIES</LinkHeader>
						<li>sdfsdf</li>
						<li>sdfsdf</li>
						<li>sdfsdf</li>
					</LinkColumn>
					<LinkColumn>
						<LinkHeader>QUICK LINKS</LinkHeader>
						<li>baba</li>
						<li>baba</li>
						<li>baba</li>
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
