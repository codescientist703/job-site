import styled from 'styled-components/macro';

export const FilterContainer = styled.aside`
	/* for mobile */

	/* background-color: #eee; */
	max-height: ${({ isFilterOpen }) => (isFilterOpen ? '540px' : '0')};
	padding: ${({ isFilterOpen }) => (isFilterOpen ? '0.8rem' : '0rem')};
	overflow: hidden;
	margin-bottom: ${({ isFilterOpen }) => (isFilterOpen ? '1rem' : '0rem')};
	border-radius: 5px;
	border: ${({ isFilterOpen }) => (isFilterOpen ? '1px solid #ddd' : '0rem')};
	transition: max-height 0.2s ease-out;
	background-color: #fff;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		position: sticky;
		top: 30px;
		display: block;
		overflow: visible;
		padding: 0.8rem 1.2rem;
		border-radius: 5px;
		border: 1px solid #ddd;
		max-height: 100%;
		margin-bottom: 1rem;
	}
`;
export const FilterBtn = styled.button`
	/* for mobile */
	display: block;
	width: fit-content;
	margin: 0 auto;
	padding: 7px 20px;
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

export const SubmitBtn = styled(FilterBtn)`
	display: block;
	align-self: flex-start;
	margin: 0 0;
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin: 0 auto;
	}
`;

export const FilterHeader = styled.h2`
	margin-bottom: 1rem;
	font-weight: 600;
`;
export const FilterItem = styled.div`
	margin-bottom: 1.2rem;
	.react-autosuggest__input {
		border: 1px solid #d2d2d2;
		padding: 8px 14px;
		border-radius: 5px;
		font-size: 1rem;
		width: 100%;
		@media screen and (min-width: ${({ theme }) => theme.md}px) {
			width: 100%;
		}
		@media screen and (min-width: ${({ theme }) => theme.lg}px) {
			width: auto;
		}

		&:focus {
			/* border: 5px solid lightblue; */
			outline: none;
		}
	}
	.react-autosuggest__input--open {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	.react-autosuggest__container {
		position: relative;
	}
	.react-autosuggest__suggestions-container {
		display: none;
		margin: 0;
	}

	.react-autosuggest__suggestions-container--open {
		display: block;
		z-index: 1000;
		position: absolute;
		top: 50px;
		background-color: #fff;
		border: 1px solid #d2d2d2;
		padding: 0px 0px;
		border-radius: 5px;
		outline: none;
		font-size: 1rem;
		width: 100%;
	}

	.react-autosuggest__suggestions-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.react-autosuggest__suggestion {
		cursor: pointer;
		padding: 10px 20px;
	}

	.react-autosuggest__suggestion--highlighted {
		background-color: #ddd;
	}
`;

export const FilterName = styled.p`
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 5px;
`;

export const FilterInput = styled.input`
	border: 1px solid #d2d2d2;
	padding: 8px 14px;
	border-radius: 5px;
	outline: none;
	font-size: 1rem;
	width: 100%;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 100%;
	}
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: auto;
	}

	&:focus {
		/* border: 5px solid lightblue; */
		border-color: blue;
	}
`;

export const FilterRange = styled.input`
	width: 100%;
	outline: none;
	/* border: 1px solid #d2d2d2;
    padding: 5px 10px;
    border-radius: 5px; */
`;
