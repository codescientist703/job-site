import {
	IconContainer,
	ShareIcon,
	DropDown,
	DropDownContent,
	SocialIcon,
	SocialIconName,
} from './ShareDropdown.elements';
import React, { useState } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import { useLocation } from 'react-router-dom';
import SiteData from '../../RawContent/site.json';

const ShareDropdown = ({ description, title }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};
	const { pathname } = useLocation();
	const url = `${SiteData.meta.siteUrl}${pathname}`;
	return (
		<DropDown>
			<IconContainer>
				<ShareIcon onClick={toggleIsOpen} />
			</IconContainer>
			<DropDownContent isOpen={isOpen}>
				<SocialIcon>
					<FacebookShareButton url={url}>
						<FacebookIcon size={32} round={true} />
						<SocialIconName>Facebook</SocialIconName>
					</FacebookShareButton>
				</SocialIcon>
				<SocialIcon>
					<LinkedinShareButton url={url} title={title} summary={description}>
						<LinkedinIcon size={32} round={true} />
						<SocialIconName>Linkedin</SocialIconName>
					</LinkedinShareButton>
				</SocialIcon>
				<SocialIcon>
					<TwitterShareButton url={url} title={title}>
						<TwitterIcon size={32} round={true} />
						<SocialIconName>Twitter</SocialIconName>
					</TwitterShareButton>
				</SocialIcon>
			</DropDownContent>
		</DropDown>
	);
};

export default ShareDropdown;
