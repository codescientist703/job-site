import styled from 'styled-components/macro';

const Container = styled.div`
	max-width: ${({ theme }) => theme.maxWidthLg}px;
	margin: 0 auto;
	padding: 0 0.4rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 0 1.25rem;
	}
`;

export default Container;
