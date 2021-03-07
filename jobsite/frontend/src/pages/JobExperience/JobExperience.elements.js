import styled from 'styled-components';

export const Title = styled.h1`

    text-align: center;
    margin: 2rem 0;
    font-size:  ${({ theme }) => theme.h1}rem;
`;

export const Paragraph = styled.p`

    /* margin-top: 2rem; */
    margin-bottom: 0.7rem;
    font-size:  ${({ theme }) => theme.p}rem;
`;