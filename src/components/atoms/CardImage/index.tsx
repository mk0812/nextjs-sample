import Image from 'next/image'
import React from "react";

type Props = {
  src: string
  alt: string
}

export const CardImage: React.VFC<Props> = ({ src, alt }) => {
  return <Image className="card-image" src={src} alt={alt} layout="fill" objectFit="contain" />
}