import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const Button = styled.a`
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
