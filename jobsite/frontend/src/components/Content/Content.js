import styled from 'styled-components/macro';

export const Content = styled.div`
	padding: 1rem;

	h1 {
		font-size: 2rem;
		font-weight: 600;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	h3 {
		font-size: 1.125rem;
		font-weight: 600;
	}

	p {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Title = styled.h1`
	font-size: ${({ theme }) => theme.h1Sm}rem;
	text-align: center;
	margin: ${({ theme }) => theme.titleMargin};
	font-weight: ${({ theme }) => theme.titleWeight};
	text-transform: capitalize;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: ${({ theme }) => theme.h1}rem;
	}
`;
