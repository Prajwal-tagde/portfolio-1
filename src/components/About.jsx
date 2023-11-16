import React from 'react';
import aboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id='about'>
        <div className="align-element grid md:grid-cols-2 items-center gap-16">

            <img src={aboutImg} alt="about" className="w-full h-64" />

            <article>
                <SectionTitle text="About" />

                <p className="text-slate-600 mt-8 leading-loose">
                Hi there! My name is Prajwal Tagde and I am a front-end developer. I love to create engaging, user-friendly websites that provide a seamless experience for visitors.

                My skill set includes HTML, CSS, JavaScript, and other related technologies. I stay up-to-date with the latest industry trends and techniques to ensure that the websites I build are not only functional, but also visually appealing and user-friendly.

                Thank you for taking the time to learn more about me and my work as a front-end developer. If you are interested in working together or have any questions, please feel free to get in touch!
                </p>
            </article>
        </div>
    </section>
  )
}

export default About
