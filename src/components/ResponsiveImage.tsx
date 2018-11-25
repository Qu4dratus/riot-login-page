// React.
import * as React from 'react';

// Emotion.
import styled from 'react-emotion';
import { addProp } from 'src/utils';

// Interfaces.
interface ResponsiveImageProps {
    src: string,
    width?: string,
    alt?: string
};

// Styled Components.
const Image = styled('img')`
    max-width: 100%;
    ${({ theme }) => {
        console.log(theme)
        return `
        ${addProp(theme, 0)}
        `}
    }
    height: auto;
`;

// Components.
const ResponsiveImage: React.SFC<ResponsiveImageProps> = ({
    src,
    width,
    alt
}) => (
        <Image src={src} width={width}  alt={alt} />
    );

export default ResponsiveImage;