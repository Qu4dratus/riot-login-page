// React.
import * as React from 'react';

// Custom Components.
import ButtonIcon from './ButtonIcon';

// Images.
import user_signup from '../../img/user_signup.png';
import ResponsiveImage from '../ResponsiveImage';

// Interfaces.
interface SignUpButtonProps {
    text?: string
};

// Components.
const SignUpButton: React.SFC<SignUpButtonProps> = ({ text = 'Login' }) => (
    <ButtonIcon>
        <ResponsiveImage src={user_signup} width="30px" padding='10px'/>
        <span>{text}</span>
    </ButtonIcon>
);

export default SignUpButton;