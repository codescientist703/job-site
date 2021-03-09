import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const BreadContainer = styled.ul`
	display: flex;
	list-style: none;
	background: ${({ theme }) => theme.secondaryColor};
	padding: 0.5rem 1rem;
	border-radius: 5px;
`;

export const BreadItems = styled.li``;

export const BreadLink = styled(Link)`
	text-decoration: none;
	color: black;
	text-transform: capitalize;
	font-size: 0.9rem;
	letter-spacing: 1px;
	font-weight: 500;
`;
