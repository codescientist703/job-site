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
