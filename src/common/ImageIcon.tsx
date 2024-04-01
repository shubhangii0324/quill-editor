/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { FC } from 'react';

interface IImageIconProps {
    src: string;
    imgClassName?: string;
    alt: string;
	imgStyle?: React.CSSProperties;
    width: number;
    height: number;
}

const ImageIcon: FC<IImageIconProps> = (props) => {
	const { src, imgClassName, alt, imgStyle, width, height } = props;
	return (
			<Image width={width} height={height} style={imgStyle} src={src} className={imgClassName} alt={alt} />
	);
};

export default ImageIcon;