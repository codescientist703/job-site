import styled from 'styled-components/macro';
import { GoHomeBtn } from '../../components';

export const NotFoundPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1rem 0.5rem 4rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 1rem 1.5rem 4rem;
	}
`;

export const IMG = styled.img`
	height: auto;
	width: 100%;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 70%;
		max-width: 900px;
	}
`;

export const Text = styled.p`
	margin-top: -1rem;
	margin-bottom: 1rem;
	text-align: center;
	font-size: 1rem;

	span {
		font-size: 2rem;
		font-weight: 700;
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin-top: -2.5rem;
		font-size: 1.4rem;

		span {
			font-size: 4rem;
		}
	}
`;

export const BackBtn = styled(GoHomeBtn)`
	margin-top: 1rem;
	font-weight: 600;
	border-radius: 50px;
`;
