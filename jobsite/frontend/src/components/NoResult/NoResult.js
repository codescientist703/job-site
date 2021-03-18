import styled from 'styled-components/macro';
import { HiOutlineEmojiSad } from 'react-icons/hi';
const Result = styled.div`
	text-align: center;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	color: crimson;
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
