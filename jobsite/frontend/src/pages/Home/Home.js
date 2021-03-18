import { useState } from 'react';
import {
	SecTwoContainer,
	Container,
	ContainerLeft,
	ContainerRight,
	SVG,
	Heading,
	Description,
	ContainerThree,
	ContainerHeading,
	Underline,
	CardContainer,
	Card,
	CardTitle,
	CardIcon,
	CardContent,
	HeroSection,
	ContainerOne,
	ContainerOneLeft,
	HeroHeading,
	HeroSubHeading,
	SearchBox,
	SearchIcon,
	SearchInput,
	SearchButton,
	ContainerOneRight,
	HeroImg,
	WaveSVG,
} from './Home.elements';
import JobImg from '../../images/homejob.svg';
import BoyImg from '../../images/boyjob.svg';
import { GoHomeBtn, Seo } from '../../components';
import Data from '../../RawContent/HomeContent';
import { theme } from '../../theme';

const Home = () => {
	return (
		<article>
			<Seo />
			<SecOne />
			<SectionTwo />
			<SectionThree />
		</article>
	);
};

const SecOne = () => {
	const [searchValue, setSearchValue] = useState('');
	const onChange = (event) => {
		setSearchValue(event.target.value);
	};
	return (
		<HeroSection>
			<ContainerOne>
				<ContainerOneLeft>
					<HeroHeading>{Data.homeTitle}</HeroHeading>
					<HeroSubHeading>{Data.homeContent}</HeroSubHeading>
					<SearchBox>
						<SearchIcon />
						<SearchInput
							type='text'
							placeholder='Search...'
							name='search'
							value={searchValue}
							onChange={onChange}
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									onChange(e);
								}
							}}
						/>
						<SearchButton
							to={{
								pathname: '/category/search',
								state: { searchValue: searchValue },
							}}
						>
							Search
						</SearchButton>
					</SearchBox>
				</ContainerOneLeft>

				<ContainerOneRight>
					<HeroImg src={JobImg} alt='Hero section image' />
				</ContainerOneRight>
			</ContainerOne>

			<WaveSVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill={theme.primaryColor}
					fillOpacity='1'
					d='M0,96L40,96C80,96,160,96,240,128C320,160,400,224,480,245.3C560,267,640,245,720,213.3C800,181,880,139,960,106.7C1040,75,1120,53,1200,69.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
				></path>
			</WaveSVG>
		</HeroSection>
	);
};

const SectionTwo = () => {
	return (
		<SecTwoContainer>
			<Container>
				<ContainerLeft>
					<SVG src={BoyImg} alt='boy image' />
				</ContainerLeft>
				<ContainerRight>
					<Heading>{Data.sec2Title}</Heading>
					<Description>{Data.sec2Content}</Description>
					<GoHomeBtn to='/category/jobs'>Apply Now</GoHomeBtn>
				</ContainerRight>
			</Container>
		</SecTwoContainer>
	);
};

const SectionThree = () => {
	return (
		<ContainerThree>
			<ContainerHeading>Browse By Category</ContainerHeading>
			<Underline />
			<CardContainer>
				{Data.card.map((data, index) => (
					<Card key={index} to={data.cardLink}>
						<CardIcon color={data.cardIconColor}>{data.cardIcon}</CardIcon>
						<CardTitle>{data.cardTitle}</CardTitle>
						<CardContent>{data.cardContent}</CardContent>
					</Card>
				))}
			</CardContainer>
		</ContainerThree>
	);
};

export default Home;
