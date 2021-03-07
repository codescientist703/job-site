import { ShareIcon, DropDown, DropDownContent } from './ShareDropdown.elements';
import React, { useState } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	RedditIcon,
	RedditShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';

const ShareDropdown = ({ url, description, title, hashtag }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<DropDown>
			<ShareIcon onClick={toggleIsOpen} />
			<DropDownContent isOpen={isOpen}>
				<FacebookShareButton url={url} hashtag={`#${hashtag}`}>
					<FacebookIcon size={32} round={true} />
					<div>Facebook</div>
				</FacebookShareButton>
				<LinkedinShareButton url={url} title={title} summary={description}>
					<LinkedinIcon size={32} round={true} />
					<div>Linkedin</div>
				</LinkedinShareButton>
				<TwitterShareButton url={'url'} title={'title'}>
					<TwitterIcon size={32} round={true} />
					<div>Twitter</div>
				</TwitterShareButton>
			</DropDownContent>
		</DropDown>
	);
};

export default ShareDropdown;
