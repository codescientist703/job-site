import styled from 'styled-components/macro';
import { FilterButton } from '../../components';

export const MainContainer = styled.section`
	/* for mobile */
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	align-items: start;
	margin-top: 1.25rem;

	/* for laptop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		grid-template-columns: 1fr 3fr;
		gap: 1.875rem;
	}
`;

export const JobContainer = styled.div``;

export const FilterBtn = styled(FilterButton)``;

export const PaginateComponent = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.secondaryColor};
	border-radius: 5px;
	margin-bottom: 1.2rem;

	.pagination {
		margin: 0.94rem auto;
		display: flex;
		list-style: none;
		outline: none;
		text-transform: capitalize;

		.active a {
			background-color: #fff;
			border: 2px solid ${({ theme }) => theme.primaryColor};
			color: ${({ theme }) => theme.primaryColor};
			font-weight: 600;
		}

		.disabled {
			opacity: 0.4;
			pointer-events: none;
		}

		li a {
			border-radius: 5px;
			padding: 0.3125rem 0.75rem;
			outline: none;
			cursor: pointer;
		}
	}
`;

export const NoData = styled.div`
	height: 50vh;
	text-align: center;
`;
