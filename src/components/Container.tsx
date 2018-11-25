// React.
import * as React from 'react'
import { SFC } from 'react';

// Emotion.
import styled from 'react-emotion';

// Interfaces.
export interface DynamicContainerProps {
    width: number,
    background?: string,
    className?: string,
};

export interface DynamicContainerContentProps extends DynamicContainerProps {
    textColor?: string,
    children?: any
};

// Styled Components.
const DynamicContainer = styled('div') <DynamicContainerProps & DynamicContainerContentProps>`
    background: ${({ background }) => background};
    color: ${({ textColor }) => textColor};
    width: ${({ width }) => width}%;
    ${({ background }) => background && 'background-size: cover'};
    height: 100%;
    display: flex;
    flex-direction: row;
`;

// Components.
const Container: SFC<DynamicContainerProps & DynamicContainerContentProps> = ({
    width,
    textColor,
    background,
    className,
    children,
}) => (
        <DynamicContainer
            width={width}
            background={background}
            textColor={textColor}
            className={className}
        >
            {children}
        </DynamicContainer>
    );

export default Container;