// React.
import * as React from 'react';

// Images.
import jhin from '../img/jhin.jpg';
import lol_logo from '../img/lol_logo.png';

// Custom Components.
import Container from './Container';
import LoginButton from './Inputs/LoginButton';
import SignUpButton from './Inputs/SignUpButton';
import ResponsiveImage from './ResponsiveImage';



// Components.
const Welcome: React.SFC<{}> = () => (
    <Container width={100}>
        <Container width={40} background={`url(${jhin}) center center`} />
        <Container width={60} background='#18191b'>
            <h1
                style={{
                    color: '#fff',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: 600,
                }}
            >
                Welcome to the Jungle
            </h1>
            <div>
                <ResponsiveImage src={lol_logo} alt='League of Legends logo' />
            </div>
            <LoginButton />
            <SignUpButton />
        </Container>
    </Container>
);

export default Welcome;