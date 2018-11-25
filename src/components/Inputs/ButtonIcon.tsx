// React.
// import * as React from 'react';

// Emotion.
import styled from 'react-emotion';

const ButtonIcon = styled('button')`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    border-radius: 5px;
    border: none;
    background-color: #1f1d24;

    color: #fff;
    
    &:hover {
        transition: 1s;
        background-color: #322f3a;
    }

    height: 50px;
    padding: 50px;
`;

export default ButtonIcon;