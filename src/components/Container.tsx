// React.
import * as React from 'react'
import { SFC } from 'react';

// Emotion.
import styled from 'react-emotion';

// Interfaces.
export interface DynamicContainerProps {
    width: number,
    background?: string,
    backgroundColor?: string,
    direction?: string,
    className?: string,
    alignItems?: string,
    justifyContent?: string,
};

export interface DynamicContainerContentProps extends DynamicContainerProps {
    textColor?: string,
    children?: any,
};

// Styled Components.
const DynamicContainer = styled('div') <DynamicContainerProps & DynamicContainerContentProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};

    ${({ justifyContent, alignItems }) => `
        ${justifyContent ? `justify-content: ${justifyContent}` : ''};
        ${alignItems ? `align-items: ${alignItems}` : ''};
    `}

    height: 100%;

    width: ${({ width }) => width}%;

    ${({ textColor, background }) => `
        ${textColor ? `text-color: ${textColor}` : ''};
        ${background ? `background: ${background}; background-size: cover` : ''};
    `}

    ${({ backgroundColor }) => `
        ${backgroundColor ? `background-color: #${backgroundColor}` : ''}
    `}
`;

// Components.
const Container: SFC<DynamicContainerProps & DynamicContainerContentProps> = ({
    width,
    textColor,
    background,
    backgroundColor,
    direction = 'row',
    alignItems,
    justifyContent,
    className,
    children,
}) => (
        <DynamicContainer
            width={width}
            background={background}
            textColor={textColor}
            className={className}
            backgroundColor={backgroundColor}
            direction={direction}
            alignItems={alignItems}
            justifyContent={justifyContent}
        >
            {children}
        </DynamicContainer>
    );

export default Container;