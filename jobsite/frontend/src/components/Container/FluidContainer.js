import styled from 'styled-components/macro';

const FluidContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.bgColor};
	padding: 2rem 0;
	min-height: 70vh;
`;

export default FluidContainer;
