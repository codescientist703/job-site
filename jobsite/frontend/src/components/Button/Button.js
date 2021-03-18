import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
	display: block;
	width: 100%;
	font-size: 1.2rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 0.6rem 1rem;
	border: none;
	background: ${({ theme }) => theme.button.background};
	color: ${({ theme }) => theme.button.color};
	transition: background-color 0.7s;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
`;

export const Button = styled.a`
	display: inline-block;
	font-size: 1.1rem;
	font-weight: 550;
	padding: 0.44rem 1.55rem;
	border: 2px solid ${({ theme }) => theme.primaryColor};
	background: ${({ theme }) => theme.button.background};
	color: ${({ theme }) => theme.button.color};
	transition: 0.5s;
	border-radius: 5px;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.button.hover.background};
		color: ${({ theme }) => theme.button.hover.color};
	}
`;

export const GoHomeBtn = styled(Link)`
	display: inline-block;
	font-size: 1.1rem;
	font-weight: 550;
	padding: 0.44rem 1.55rem;
	border: 2px solid ${({ theme }) => theme.primaryColor};
	background: ${({ theme }) => theme.button.background};
	color: ${({ theme }) => theme.button.color};
	transition: 0.5s;
	border-radius: 5px;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.button.hover.background};
		color: ${({ theme }) => theme.button.hover.color};
	}
`;

export const LinkButton = styled(Link)`
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	text-decoration: none;
	color: ${({ theme }) => theme.link.color};
	transition: ${({ theme }) => theme.link.transition};

	&:hover {
		color: ${({ theme }) => theme.link.hover.color};
	}
`;

export const FilterButton = styled.button`
	display: block;
	width: fit-content;
	margin: 0 auto;
	padding: 0.44rem 1.25rem;
	border-radius: 5px;
	outline: none;
	background: transparent;
	border: 1px solid ${({ theme }) => theme.primaryColor};
	color: ${({ theme }) => theme.primaryColor};
	margin-bottom: 1.3rem;
	font-size: 0.9rem;
	font-weight: 600;
	cursor: pointer;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: none;
	}
`;
