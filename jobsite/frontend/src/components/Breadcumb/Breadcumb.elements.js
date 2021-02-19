import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const BreadContainer = styled.ul`
	display: flex;
	list-style: none;
	background: lightblue;
	padding: 0.6rem 1rem;
	border-radius: 5px;
	margin-top: 1.7rem;
`;
export const BreadItems = styled.li``;
export const BreadLink = styled(Link)`
	text-decoration: none;
	color: black;
	text-transform: capitalize;
`;
