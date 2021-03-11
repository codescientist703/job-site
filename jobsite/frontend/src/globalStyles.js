import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    :root{
        font-size: 12px;

        @media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 16px;
	}
    }
`;

export default GlobalStyle;
