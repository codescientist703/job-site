import React from 'react';
import { Header } from '../../components';
import {
	FeatureContainer,
	FeatureContent,
	FeatureImage,
} from './Home.elements';
import JobImg from '../../images/homejob.svg';
const Home = () => {
	return (
		<div>
			<Header />
			<FeatureContainer>
				<FeatureContent>
					<h1>Tired of searching for jobs ?</h1>
					<p>Forget the hassle for searching by the revolutuion</p>
				</FeatureContent>
				<FeatureImage src={JobImg} />
			</FeatureContainer>
		</div>
	);
};

export default Home;
