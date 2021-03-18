import styled from 'styled-components/macro';
import { HiOutlineEmojiSad } from 'react-icons/hi';
const Result = styled.div`
	text-align: center;
	margin-bottom: 1rem;
`;

const NoResult = () => {
	return (
		<Result>
			No Results Found.. <HiOutlineEmojiSad />
		</Result>
	);
};

export default NoResult;
