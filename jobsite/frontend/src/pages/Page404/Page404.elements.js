import styled from 'styled-components/macro';
import { Button } from '../../components';

export const NotFoundPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0.5rem 0.2rem 4rem 0.2rem;
`;

export const IMG = styled.img`
	height: auto;
	width: 100%;
	/* border: 1px solid black; */

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 70%;
	}
`;

export const Text = styled.p`
	/* color: #fff; */
	margin-top: -1rem;
	text-align: center;
	font-size: 1rem;
	span {
		font-size: 2rem;
		font-weight: 700;
	}
	margin-bottom: 1rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin-top: -2.5rem;
		font-size: 1.4rem;
		span {
			font-size: 4rem;
		}
	}
`;

export const BackBtn = styled(Button)`
	margin-top: 1rem;
	/* background: none; */
	/* border: 2px solid white; */
	font-weight: 600px;
	border-radius: 50px;
`;
