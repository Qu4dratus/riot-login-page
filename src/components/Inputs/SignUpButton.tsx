// React.
import * as React from 'react';

// Custom Components.
import ButtonIcon from './ButtonIcon';

// Interfaces.
interface SignUpButtonProps {
    text?: string
};

// Components.
const SignUpButton: React.SFC<SignUpButtonProps> = ({ text = 'Login' }) => (
    <ButtonIcon>
        {text}
    </ButtonIcon>
);

export default SignUpButton;