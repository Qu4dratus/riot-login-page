// React.
import * as React from 'react';

// Custom Components.
import ButtonIcon from './ButtonIcon';

// Images.
import user_login from '../../img/user_login.png';
import ResponsiveImage from '../ResponsiveImage';

// Interfaces.
interface LoginButtonProps {
    text?: string
};

// Components.
const LoginButton: React.SFC<LoginButtonProps> = ({ text = 'Sign Up' }) => (
    <ButtonIcon>
        <ResponsiveImage src={user_login} />
        <span>{text}</span>
    </ButtonIcon>
);

export default LoginButton;