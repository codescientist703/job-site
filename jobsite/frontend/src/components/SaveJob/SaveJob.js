import React from 'react';
import { FiStar } from 'react-icons/fi';
import styled from 'styled-components/macro';

export const StarIcon = styled(FiStar)`
	font-size: 1.2rem;
`;

const SaveJob = () => {
	const LIMIT = 30;
	const handleJob = () => {
		if (localStorage.getItem('myjobs')) {
			const slugs = localStorage.getItem('myjobs').split(', ');
			console.log(slugs);
		} else {
			localStorage.setItem('myjobs', ['sdf']);
		}
	};
	return <StarIcon onClick={handleJob} />;
};

export default SaveJob;
