import { FiShare2 } from 'react-icons/fi';
import ShareButton from 'react-share/lib/ShareButton';
import styled from 'styled-components/macro';

export const DropDown = styled.div`
	position: relative;
	display: inline-block;
	left: 1rem;
`;
export const ShareIcon = styled(FiShare2)`
	font-size: 1.2rem;
	cursor: pointer;
`;

export const DropDownContent = styled.div`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: absolute;
	background-color: #f1f1f1;
	min-width: 160px;
	z-index: 1;
	padding: 4px 0px;
	button {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		svg {
			padding: 0px 4px;
		}
		div {
		}
	}
`;
