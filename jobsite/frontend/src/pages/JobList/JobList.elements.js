import styled from 'styled-components';

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
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: block;
        padding: 0.8rem 1.2rem;
        border-radius: 5px;
        border: 1px solid #ddd;
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
`;


export const FilterItem = styled.div`
    margin-bottom: 1.2rem;
`;

export const FilterName = styled.p`

    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const FilterInput = styled.input`

    border: 1px solid #d2d2d2;
    padding: 8px 14px;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;

    &:focus{
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




