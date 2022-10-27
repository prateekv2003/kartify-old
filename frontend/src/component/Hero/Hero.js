import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = ({ handleHomeClick }) => {
	
	return (
		<HeroSection>
			<HeroVideo src="./assets/Landing.mp4" autoPlay muted loop />
			<Container>
				<MainHeading>Find the best products available at the lowest rates!</MainHeading>
				{/* <HeroText>
					We provide the best security systems for clients all over the world
				</HeroText> */}
				<ButtonWrapper>
					<Link to onClick={handleHomeClick}>
						<Button>Get Started</Button>
					</Link>
					{/* <HeroButton>Find More</HeroButton> */}
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
