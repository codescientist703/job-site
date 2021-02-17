import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const WaveIcon = styled.svg`
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
		margin-top: -4.6rem;
	}
`;
export const FeatureContainer = styled.div`
	/* display: flex;
	flex-direction: column; */
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	height: 50vh;
	width: 100%;
	max-width: 1300px;
	/* margin: 60px auto 0; */
	margin: 70px auto 30px;
	padding: 0rem 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		margin: 70px auto 30px;
		align-items: start;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
	}
`;

export const FeatureContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	/* padding: 20px; */
	/* padding: 0 1.35rem; */
	h1 {
		font-weight: 800;
		font-size: 2.4rem;
	}
	p {
		margin-top: 1.1rem;
		font-size: 1.3rem;
		color: rgba(0, 0, 0, 0.7);
	}

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		h1 {
			font-size: 2.8rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		h1 {
			font-size: 3.6rem;
		}
	}
`;

export const FeatureImage = styled.img`
	/* padding-right: 20px; */
	width: 100%;
	height: auto;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
		max-width: 550px;
	}
`;

export const SearchContainer = styled.div`
	margin-top: 1.5em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
	padding: 5px 5px;
	width: 100%;
	max-width: 450px;
	border-radius: 50px;

	/* @media screen and (min-width: 600px) {
		width: 60%;
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 80%;
	} */
`;

// export const SearchIcon = styled(IoSearch)`
// 	width: 15%;
// 	font-size: 1.5rem;
// `;

// export const SearchInput = styled.input`
// 	width: 50%;
// 	border: none;
// 	outline: none;
// 	padding: 5px;
// 	font-size: 1.09rem;

// 	@media screen and (min-width: ${({ theme }) => theme.md}px) {
// 		width: 70%;
// 	}
// `;

// export const SearchButton = styled.button`
// 	border: none;
// 	outline: none;
// 	padding: 9px 20px;
// 	border-radius: 20px;
// 	font-weight: 500;
// 	font-size: 1.01rem;
// `;

// styling for section two starts

export const SecTwoContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
	min-height: 80vh;
	padding: 4rem 1.5rem;
	background: #f5f5f5;
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		flex-direction: row;
		/* padding: 4rem 10rem; */
	}
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		/* padding: 4rem 10rem; */
	}
`;

export const BoySvg = styled.div`
	img {
		width: 90%;
		height: auto;
	
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
			width: 45%;
		}
		img{
			width:100%;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 40%;
		/* margin-right: 1rem; */

		img{
			/* max-width: 550px; */
			width: 100%;
		}
	}
`;

export const Content = styled.div`
	font-size: 1rem;
	margin-bottom: 3rem;
	h2 {
		font-size: 1.8rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.3rem;
		margin-bottom: 1.5rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		h2 {
		font-size: 2.1rem;
		}
		p {
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 45%;
		
		/* margin-right: 1rem; */
	}
`;

export const Container = styled.div`

	/* for mobile */
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 100px 20px;
	display: flex;
	flex-direction: column-reverse;
	/* justify-content: space-between;
	align-items: center; */
	flex-wrap: wrap;
	background-color: #e2e2e2;

	/* tablet and higher devices */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		flex-direction: row;
		justify-content: space-between;

		padding: 150px 20px;	
	} 
`;

export const ContainerLeft = styled.div`

	/* for mobile */
	width: 100%;
	background-color: #eee;
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.md}px){
		width: 45%;
	} 
`;

export const ContainerRight = styled.div`

	/* for mobile */
	width: 100%;
	background-color: #eee;
	padding: 10px 20px;

	@media screen and (min-width: ${({ theme }) => theme.md}px){
		width: 45%;
	} 
`;

export const SVG = styled.img`
	margin-top: 30px;
	width: 100%;
	max-width: 450px;
	/* min-width: 400px; */

	@media screen and (min-width: ${({ theme }) => theme.md}px){
		max-width: 500px;
	}
`;

export const Heading = styled.h2`

	/* for mobile */
	font-size: 1.7rem;
	margin-bottom: 10px;

	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		font-size: 1.95rem;
	}
`;

export const Description = styled.p`
	
	/* for mobile */
	font-size: 1.05rem;
	margin-bottom: 10px;

	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		margin-bottom: 20px;
		font-size: 1.25rem;
	}
`;

export const Btn = styled.button`

	/* for mobile */
	font-size: 1.2rem;
	padding: 7px 25px;
	border: none;
	outline: none;
	background: linear-gradient( to bottom right, blue, purple);
	color: white;
	border-radius: 50px;

	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		font-size: 1.3rem;
		padding: 10px 30px;
	}
`;



// conatiner three styling starts

export const ContainerThree = styled.div`
	/* for mobile */
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 30px 20px;
	background-color: #e9e9e9;

	/* tablet and higher devices */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		/* padding: 30px 20px;	 */
	}

`;

export const ContainerHeading = styled.h2`

	/* for mobile */
	text-align: center;
	margin-bottom: 7px;
`;

export const Underline = styled.div`

	height: 5px;
	width: 90px;
	background-color: black;
	margin: 0 auto;
`;

export const CardContainer = styled.div`

	/* for mobile device */
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 100px;

	/* for tablet  */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 30px 30px;
	}

	/* for laptop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		grid-template-columns: repeat(3, 1fr);
	}

`;

export const Card = styled.div`

	/* for mobile */
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	min-height: 200px;
	box-shadow: 0 2px 10px rgba(0,0,0,0.2);
	margin-bottom: 20px;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		/* margin-right: 20px; */
		/* width: 50%; */
	}

	/* for laptop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		/* width: 30%; */
	}
`;

export const CardImg = styled.img`

`;

export const CardTitle = styled.h3`

`;



// hero section styling starts

export const HeroSection = styled.section`

	width: 100%;
	position: relative;
	
	/* for tablet */
	/* @media screen and (min-width: ${({ theme }) => theme.md}px){
		min-height: 50vh;
	} */

	/* for desktop */
	/* @media screen and (min-width: ${({ theme }) => theme.lg}px){
		min-height: 80vh;
	} */
`;

export const ContainerOne = styled.div`

	/* for mobile */

	width: 100%;
	max-width: 1300px;
	
	margin: 0 auto;
	margin-top: 1.5rem;
	padding: 0px 20px;
	/* background-color: #eaeaea; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* flex-wrap: wrap; */

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){ 
		margin-top: 2.5rem;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
`;

export const ContainerOneLeft = styled.article`

	/* for mobile */
	/* background-color: #fafafa; */
	padding: 10px 20px;
	width: 100%;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		width: 45%;
	}
`;

export const ContainerOneRight = styled.figure`
	/* for mobile */
	/* background-color: #fafafa; */
	padding: 10px 20px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		width: 48%;
	}
	
`;

export const HeroHeading = styled.h2`

	/* for mobile */
	font-size: 1.8rem;
	margin-bottom: 10px;
	font-weight: 900;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		font-size: 2rem;
	}

	/* for desktop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		font-size: 2.5rem;
	}
`;

export const HeroSubHeading = styled.p`
	
	/* for mobile */
	font-size: 1.15rem;
	font-weight: 500;
	color: rgba(0,0,0,0.5);
	margin-bottom: 30px;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		font-size: 1.2rem;
	}

	/* for desktop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		font-size: 1.35rem;
	}
`;

export const SearchBox = styled.div`

	/* for mobile */
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* background-color: #ddd; */
	padding: 4px 7px;
	border-radius: 50px;
	max-width: 380px;
	box-shadow: 0 2px 8px rgba(0,0,0,0.15);

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		padding: 6px 7px;
	}
`;

export const SearchIcon = styled(IoSearch)`

	/* for mobile */
	width: 15%;
	font-size: 1.5rem;
`;

export const SearchInput = styled.input`
	width: 50%;
	border: none;
	outline: none;
	padding: 5px;
	font-size: 1.09rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		/* width: 70%; */
		width: 55%;
	}
`;

export const SearchButton = styled.button`
	border: none;
	outline: none;
	padding: 9px 20px;
	border-radius: 20px;
	font-weight: 500;
	font-size: 1.01rem;
`;

export const HeroImg = styled.img`

	width: 100%;
	height: auto;
	max-width: 450px;
	margin-top: 30px;
	margin-bottom: 30px;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		margin: 0;
	}
`;

export const WaveSVG = styled.svg`
	/* position: absolute; */
	position: relative;
	left: 0;
	bottom: 0;
	z-index: -1;
	display: none;
	/* min-height: 250px; */
	/* max-height: 300px; */

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px){
		display: block;
	}

	/* for desktop */
	/* @media screen and (min-width: 1500px){
		height: 300px;
	} */
`;


