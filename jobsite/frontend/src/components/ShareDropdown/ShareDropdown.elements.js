import { FiShare2 } from 'react-icons/fi';
import styled from 'styled-components/macro';

export const DropDown = styled.div`
	position: relative;
	display: inline-block;
`;

export const IconContainer = styled.div`
	position: relative;
`;

export const ShareIcon = styled(FiShare2)`
	position: relative;
	font-size: 1.2rem;
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.primaryColor};
	}
`;

export const SocialIcon = styled.div`
	margin: 0.2rem 0;
	padding: 0.2rem 0.8rem;
	border-radius: 3px;
	transition: 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.secondaryColor};
	}
`;

export const SocialIconName = styled.p``;

export const DropDownContent = styled.div`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: absolute;
	right: 10%;
	background-color: #fff;
	min-width: 160px;
	z-index: 1;
	padding: 0.3rem 0;
	border: 1px solid #ddd;
	border-radius: 5px;

	button {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		outline: none;

		svg {
			padding-right: 0.5rem;
		}
	}
`;
