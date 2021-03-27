import styled from 'styled-components/macro';

export const Content = styled.div`
	font-size: 1rem;
	padding: ${({ generalPage }) =>
		generalPage ? '0 0.5rem' : '1rem 1rem 1.5rem'};
	line-height: 1.6;
	word-wrap: break-word;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: ${({ generalPage }) =>
			generalPage ? '0 0.5rem' : '1rem 1.5rem 1.5rem'};
	}
	p,
	h1,
	h2,
	h3 {
		margin-bottom: 1rem;
	}
	h1 {
		font-size: 2rem;
		font-weight: 600;
	}
	h2 {
		font-size: 1.3rem;
		font-weight: 600;
	}
	h3 {
		font-weight: 600;
	}
	a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	ol,
	ul {
		padding-left: 1rem;
		margin-bottom: 1rem;
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
