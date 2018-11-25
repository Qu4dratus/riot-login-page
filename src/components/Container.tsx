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
    display: flex;
    flex-direction: row;
    height: 100%;

    width: ${({ width }) => width}%;

    ${({ textColor, background }) => `
        ${textColor ? `text-color: ${textColor}` : ''};
        ${background ? `background: ${background}; background-size: cover` : ''};
    `}
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