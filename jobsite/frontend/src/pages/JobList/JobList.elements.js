import styled from 'styled-components/macro';
export const MainContainer = styled.section`
	/* for mobile */

	width: 100%;
	/* padding: 0 20px; */
	display: grid;
	grid-template-columns: 1fr;
	align-items: start;
	margin-top: 20px;

	/* for laptop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		grid-template-columns: 1fr 3fr;
		gap: 30px;
	}
`;

export const JobContainer = styled.div`
	/* padding: 0.8rem; */

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		/* padding: 0.8rem 1.5rem; */
	}
`;

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
export const PaginateComponent = styled.div`
	display: flex;
	/* justify-content: center; */
	/* padding: 1.2rem; */
	background-color: #eee;
	border-radius: 5px;
	margin-bottom: 1.2rem;

	.pagination {
		margin: 15px auto;
		display: flex;
		list-style: none;
		outline: none;
		text-transform: capitalize;
		.active a {
			background-color: #47ccde;
			/* border-color: #47ccde; */
			color: #fff;
			font-weight: 600;
		}
		.disabled {
			opacity: 0.4;
			pointer-events: none;
		}
		li a {
			/* border: 1px solid #47ccde; */
			border-radius: 5px;
			padding: 5px 12px;
			outline: none;
			cursor: pointer;
		}
	}
`;
