import styled from 'styled-components/macro';

export const Content = styled.div`
	padding: ${({ generalPage }) => (generalPage ? '0 0.5rem' : '1rem')};
	text-align: justify;
	line-height: 1.6;

	h1,
	h2,
	h3 {
		margin: 0.8rem 0 0.2rem;
	}

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
		margin-bottom: 0.6rem;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	ol,
	ul {
		padding-left: 1.1rem;
	}
`;

export const Title = styled.h1`
	font-size: ${({ theme }) => theme.h1Sm}rem;
	margin: ${({ generalPage }) => (generalPage ? '0 0 1.5rem' : '1.5rem 0')};
	text-align: center;
	font-weight: ${({ theme }) => theme.titleWeight};
	text-transform: capitalize;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: ${({ theme }) => theme.h1}rem;
		margin: ${({ theme, generalPage }) =>
			generalPage ? '0 0 1.5rem' : theme.titleMargin};
	}
`;
