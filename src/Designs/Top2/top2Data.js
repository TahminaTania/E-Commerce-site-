import React from 'react';
import { FaPinterestP, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdFavorite, MdShoppingCart} from 'react-icons/md';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/shop',
    text: 'Shop',
  },
  {
    id: 3,
    url: '/page',
    text: 'Page',
  },
  {
    id: 4,
    url: '/blog',
    text: 'Blog',
  },
  {
    id: 5,
    url: '/contact',
    text: 'Contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaPinterestP />,
  },
];



export const Cart = [
    {
      id: 1,
      value: 0,
      icon: <MdFavorite />,
    },
    {
      id: 2,
      value: 0,
      icon: <MdShoppingCart />,
    },
  ];