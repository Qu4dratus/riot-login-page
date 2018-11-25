// React.
import * as React from 'react';

// Emotion.
import styled from 'react-emotion';

// Interfaces.
interface IResponsiveImage {
    src: string,
    width?: string,
    alt?: string
};

// Styled Components.
const Image = styled('img')`
    max-width: 100%;
    ${({ theme: { width } }) => width && 'width: ' + width};
    height: auto;
`;

// Components.
const ResponsiveImage: React.SFC<IResponsiveImage> = ({
    src,
    width,
    alt
}) => (
        <Image src={src} width={width} alt={alt}  />
    );

export default ResponsiveImage;