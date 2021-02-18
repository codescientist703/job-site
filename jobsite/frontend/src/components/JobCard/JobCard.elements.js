import styled from 'styled-components/macro';
import { FiStar } from 'react-icons/fi';

export const Card = styled.div`

    /* for mobile */
    width: 90%;
    box-shadow: 0 2px 7px rgba(0,0,0,0.2);
    margin: 0 auto;
    padding: 0.7rem 1.2rem;
    border-radius: 10px;
    margin-bottom: 1.2rem;
    /* margin-top: 0.7rem; */
`;

export const CardTop = styled.div`

    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

`;

export const CardMiddle = styled.div`

    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const CardBottom = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const JobDetails = styled.div`

    
`;

export const JobTitle = styled.p`


`;

export const JobCompany = styled.h3`

    font-size: 1rem;
    letter-spacing: 1px;
`;

export const StarIcon = styled(FiStar)`

    font-size: 1.2rem;
`;

export const Item = styled.div`

`;

export const ItemTitle = styled.h3`

    font-size: 0.9rem;
`;

export const ItemDescription = styled.p`
    font-size: 0.9rem;
`;

export const JobDescription = styled.p`
    font-size: 0.85rem;
    width: 60%;
`;

export const Btn = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
`;