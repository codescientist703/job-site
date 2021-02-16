import styled from 'styled-components';

const Button = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: blue;
	color: #fff;
	transition: 0.2s ease-out;
	&:hover {
		background: #ffc500;
		cursor: pointer;
		transition: 0.2s ease-out;
		color: #000;
	}
`;
export default Button;
