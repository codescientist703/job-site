import styled from 'styled-components/macro';
import { FilterButton } from '../../components';

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

export const ClearButton = styled(FilterButton)`
	display: block;
	margin: 0;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: block;
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
	position: relative;
	width: 100%;
	outline: none;
	-webkit-appearance: none;
	height: 7px;
	width: 100%;
	background-color: ${({ theme }) => theme.primaryColor};
	border-radius: 50px;

	&::-webkit-slider-thumb {
		position: relative;
		-webkit-appearance: none;
		color: ${({ theme }) => theme.primaryColor};
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border: 2px solid ${({ theme }) => theme.primaryColor};
		background: #fff;
	}
`;

export const SliderValue = styled.p`
	text-align: center;
`;

export const RangeData = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Range = styled.p`
	color: ${({ theme }) => theme.subParaColor};
	font-size: 0.9rem;

	&:not(:first-child) {
		transform: translateX(40%);
	}
`;
