import Link from 'next/link';
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaRust } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion, useScroll, animate, useAnimate } from "framer-motion";


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Ben Feuer</h1>
      <p className="text-lg mb-8">A high school student with experience programming wiht Rust, React, Typescript, NextJS, and more.</p>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc pl-6 mb-8">
        <li><FaRust className="inline-block h-6 w-6 mr-2" />Rust</li>
        <li><SiNextdotjs className="inline-block h-6 w-6 mr-2" />Next.js</li>
        <li><FaReact className="inline-block h-6 w-6 mr-2" />React</li>
        {/* Add more skills as necessary */}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Socials</h2>
      <ul className="list-none mb-8">
        <li className="flex items-center mb-2">
          <FaGithub className="h-6 w-6 mr-2" />
          <Link href="https://github.com/yourusername" className='text-white'>
            Github
          </Link>
        </li>
        <li className="flex items-center mb-2">
          <FaInstagram className="h-6 w-6 mr-2" />
          <Link href="https://instagram.com/yourusername" className='text-white'>
            Instagram
          </Link>
        </li>
        <li className="flex items-center mb-2">
          <FaTwitter className="h-6 w-6 mr-2" />
          <Link href="https://twitter.com/yourusername" className='text-white'>
            Twitter
          </Link>
        </li>
        {/* Add more social links as necessary */}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
      <p className="mb-8">You can also email me at benjamin.m.feuer@gmail.com</p>
    </div>
  );
}

