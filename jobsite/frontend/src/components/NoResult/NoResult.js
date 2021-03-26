import styled from 'styled-components/macro';
import { HiOutlineEmojiSad } from 'react-icons/hi';
const Result = styled.div`
	text-align: center;
	margin-bottom: 1rem;
	font-size: 1.4rem;
	color: crimson;
	background-color: rgba(255, 0, 0, 0.1);
	padding: 0.5rem 0.3rem;
	border-radius: 7px;
	margin-top: 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin-top: 0;
	}
`;

const Emoji = styled(HiOutlineEmojiSad)`
	margin-bottom: -0.2rem;
`;

const NoResult = () => {
	return (
		<Result>
			No Results Found...&nbsp;
			<Emoji />
		</Result>
	);
};

export default NoResult;
