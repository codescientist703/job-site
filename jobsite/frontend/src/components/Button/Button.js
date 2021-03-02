import styled from 'styled-components/macro';

const Button = styled.a`
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
export default Button;
