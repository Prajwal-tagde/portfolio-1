import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroImg from '../assets/hero.svg';
import prajwal from '../assets/prajwal.png';

const Hero = () => {
  return (
    <section className=" py-24 mt-10 ">
        <div className="align-element grid md:grid-cols-2 items-center gap-8">
            <article>
                <h1 className="text-7xl font-bold tracking-wide">I'm Prajwal</h1>

                <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
                    React Developer
                </p>
                <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
                    turning ideas into interactive reality
                </p>

                <div className="flex gap-x-4 mt-4">
                    <a href="https://github.com/Prajwal-tagde" target='_blank'>
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href="https://www.linkedin.com/in/prajwal-tagde-aa7604203/" target='_blank'>
                        <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    
                </div>

            </article>

            <article className="hidden md:block">
                <img src={prajwal} alt="" className='h-80 lg:h-96' />
            </article>
        </div>
    </section>
  )
}

export default Hero
