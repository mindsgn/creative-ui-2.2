import React, { Component } from 'react';
//import { Image } from '@chakra-ui/react';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/${src}?w=${width}&q=${quality || 75}`
  }

export default class Logo extends Component {
    render() {
        return (
            <Image
                loader={myLoader} 
                src="dyangxc7h/image/upload/v1623552244/creative/Creative_logo.png"
                alt="Creative Logo"
                width={155}
                height={139} 
            />
        )
    }
}
