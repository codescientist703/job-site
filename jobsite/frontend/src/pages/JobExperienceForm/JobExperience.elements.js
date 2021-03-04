import styled from 'styled-components/macro';

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.h1};
    text-align: center;
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    width: 100%;
    padding: 1.5rem 2rem;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
`;

export const FormInput = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
`;

export const Label = styled.p`
    margin-bottom: 0.3rem;
    margin-left: 0.2rem;
    font-size: 1rem;
`;

export const Inpt = styled.input`
    width: 100%;
    padding: 0.6rem;
    text-indent: 10px;
    border-radius: 50px;
    border: 1px solid #d9d9d9;
    outline: none;

    &::placeholder{
        font-size: 1rem;
    }
`;


