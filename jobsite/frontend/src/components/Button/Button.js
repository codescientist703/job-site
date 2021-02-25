import styled from 'styled-components/macro';

const Button = styled.button`
	font-size: 1.2rem;
	padding: 7px 25px;
	border: none;
	background: ${({ theme }) => theme.button.background};
	color: ${({ theme }) => theme.button.color};
	transition: background 0.7s;
	border-radius: 5px;

	&:hover {
		background: ${({ theme }) => theme.button.hover.background};
		cursor: pointer;
		color: ${({ theme }) => theme.button.hover.color};
	}
`;
export default Button;
