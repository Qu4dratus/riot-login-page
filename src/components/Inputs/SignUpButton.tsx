// React.
import * as React from 'react';

// Emotion.
import styled from 'react-emotion';

// Interfaces.
interface ISignUpButton {
    text?: string
};

const ButtonWithIcon = styled('button')`
    
`;

// Components.
const SignUpButton: React.SFC<ISignUpButton> = ({ text = 'Login' }) => (
    <ButtonWithIcon>
        {text}
    </ButtonWithIcon>
);

export default SignUpButton;