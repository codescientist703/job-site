import React from 'react';
import {
	HomeContainer,
	FeatureContainer,
	FeatureContent,
	FeatureImage,
	SearchContainer,
	SearchIcon,
	SearchInput,
	SearchButton,
	WaveIcon,
	Content,
	SecTwoContainer,
	BoySvg,
} from './Home.elements';
import JobImg from '../../images/homejob.svg';
import BoyImg from '../../images/boyjob.svg';
import { Button } from '../../components';
const Home = () => {
	return (
		<div>
			<SectionOne />
			<SectionTwo />
		</div>
	);
};
const SectionOne = () => {
	return (
		<section>
			<FeatureContainer>
				<FeatureContent>
					<h1>Tired of searching for jobs ?</h1>
					<p>Forget the hassle for searching by the revolution</p>
					<SearchContainer>
						<SearchIcon />
						<SearchInput type='text' placeholder='Search...' />
						<SearchButton>Search</SearchButton>
					</SearchContainer>
				</FeatureContent>
				<FeatureImage src={JobImg} />
			</FeatureContainer>
			<WaveIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#0099ff'
					fill-opacity='1'
					d='M0,96L40,96C80,96,160,96,240,128C320,160,400,224,480,245.3C560,267,640,245,720,213.3C800,181,880,139,960,106.7C1040,75,1120,53,1200,69.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
				></path>
			</WaveIcon>
		</section>
	);
};
const SectionTwo = () => {
	return (
		<section>
			<SecTwoContainer>
				<BoySvg>
					<img src={BoyImg} alt='boy-job' />
				</BoySvg>
				<Content>
					<h2>Find Thousands of jobs and apply for what you like..</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						eligendi facere saepe dolorem facilis esse numquam odit maxime
						mollitia non at, cumque laboriosam aut ipsum doloribus ut ducimus
						culpa deleniti.
					</p>
					<Button>Apply Now !!</Button>
				</Content>
			</SecTwoContainer>
		</section>
	);
};

const SectionThree = () => {
	return <section>section3</section>;
};
export default Home;
