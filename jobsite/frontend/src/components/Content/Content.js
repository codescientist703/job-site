import styled from 'styled-components/macro';

const Content = styled.div`
	line-height: 1.5;
	/* letter-spacing: 1px; */
	padding: 1rem 1rem;
	h1 {
		font-size: 2rem;
		font-weight: 600;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
	}
	p {
		font-size: 1rem;
		margin-bottom: 0.8rem;
	}
	a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export default Content;
