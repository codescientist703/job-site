import styled from 'styled-components';

const Button = styled.button`
	font-size: 1.2rem;
	padding: 7px 25px;
	border: none;
	background: linear-gradient(to bottom right, blue, purple);
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
