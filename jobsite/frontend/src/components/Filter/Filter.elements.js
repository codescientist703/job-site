import styled from 'styled-components/macro';

export const FilterContainer = styled.aside`
	/* for mobile */
	max-height: ${({ isFilterOpen }) => (isFilterOpen ? '620px' : '0')};
	padding: ${({ isFilterOpen }) => (isFilterOpen ? '0.8rem' : '0rem')};
	overflow: hidden;
	margin-bottom: ${({ isFilterOpen }) => (isFilterOpen ? '1rem' : '0')};
	border-radius: 5px;
	border: ${({ isFilterOpen }) => (isFilterOpen ? '1px solid #ddd' : '0')};
	transition: max-height 0.2s ease-out;
	background-color: #fff;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		position: sticky;
		top: 1.875rem;
		display: block;
		overflow: visible;
		padding: 0.8rem 1.2rem;
		border-radius: 5px;
		border: 1px solid #ddd;
		max-height: 100%;
		margin-bottom: 1rem;
		width: 375px;
	}
`;
export const FilterBtn = styled.button`
	/* for mobile */
	display: block;
	width: fit-content;
	margin: 0 auto;
	padding: 0.44rem 1.25rem;
	border-radius: 5px;
	outline: none;
	border: none;
	margin-bottom: 1.3rem;
	font-size: 1.1.rem;
	font-weight: 600;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: none;
	}
`;

export const ClearButton = styled(FilterBtn)`
	display: block;
	align-self: flex-start;
	margin: 0;
	color: red;
	background: cyan;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin: 0 auto;
		display: block;
	}
	&:hover {
		background: lightblue;
	}
`;

export const FilterHeader = styled.h2`
	margin-bottom: 1rem;
	font-weight: 600;
`;
export const FilterItem = styled.div`
	margin-bottom: 1.2rem;

	.sliderContainer {
		display: inline;
		background: red;
		width: 100%;
	}
`;

export const FilterName = styled.p`
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 0.315rem;
`;

export const FilterInput = styled.input`
	border: 1px solid #d2d2d2;
	padding: 0.5rem 0.875rem;
	border-radius: 5px;
	outline: none;
	font-size: 1rem;
	width: 100%;

	&:focus {
		border-color: blue;
	}
`;

export const FilterRange = styled.input`
	width: 100%;
	outline: none;
`;
