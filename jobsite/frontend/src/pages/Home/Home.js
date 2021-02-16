import React from 'react';
import {
	FeatureContainer,
	FeatureContent,
	FeatureImage,
	SearchContainer,
	SearchIcon,
	SearchInput,
	SearchButton,
} from './Home.elements';
import JobImg from '../../images/homejob.svg';

const Home = () => {
	return (
		<div>
			<SectionOne />
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
		</section>
	);
};
const SectionTwo = () => {
	return <section>section2</section>;
};

const SectionThree = () => {
	return <section>section3</section>;
};
export default Home;
