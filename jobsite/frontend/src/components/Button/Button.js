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
	padding: 7px 25px;
	border: none;
	background: ${({ theme }) => theme.button.background};
	color: ${({ theme }) => theme.button.color};
	transition: background-color 0.7s;
	border-radius: 5px;
	text-decoration: none;

	&:hover {
		background-color: ${({ theme }) => theme.button.hover.background};
		cursor: pointer;
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
