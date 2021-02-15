import styled from 'styled-components';

export const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FeatureContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
	h1 {
		font-weight: 900;
		font-size: 2.3rem;
	}
	p {
		font-size: 1rem;
	}
`;
export const FeatureImage = styled.img`
	width: 100%;
	height: auto;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: block;
	}
`;
