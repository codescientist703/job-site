import styled from 'styled-components/macro';

export const Loading = styled.div`
	height: 70vh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	background: ${({ theme }) => theme.bgColor};

	.loader {
		width: 7em;
		height: 7em;
		font-size: 25px;
		box-sizing: border-box;
		border-top: 0.3em solid hotpink;
		border-radius: 50%;
		position: relative;
		animation: rotating 2s ease-in-out infinite;
		--direction: 1;

		@media screen and (min-width: ${({ theme }) => theme.md}px) {
			width: 10em;
			height: 10em;
		}
	}

	.loader::before,
	.loader::after {
		content: '';
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		box-sizing: border-box;
		top: -0.2em;
	}

	.loader::before {
		border-top: 0.3em solid dodgerblue;
		transform: rotate(120deg);
	}

	.loader::after {
		border-top: 0.3em solid gold;
		transform: rotate(240deg);
	}

	.loader span {
		position: absolute;
		width: inherit;
		height: inherit;
		text-align: center;
		line-height: 7em;
		animation: rotating 2s linear infinite;
		--direction: -1;
		font-weight: 600;
		font-size: 1.5rem;

		@media screen and (min-width: ${({ theme }) => theme.md}px) {
			line-height: 10em;
		}
	}

	@keyframes rotating {
		50% {
			transform: rotate(calc(180deg * var(--direction)));
		}

		100% {
			transform: rotate(calc(360deg * var(--direction)));
		}
	}
`;
