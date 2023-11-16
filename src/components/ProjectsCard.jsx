import React from 'react'
import { FaGitSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 p-2">
        <img src={img} alt="project-image" />

        <div className="capitalize p-8">
            <h2 className="text-xl tracking-wide font-medium">{title}</h2>
            <p className="mt-4 text-slate-700 leading-loose"><span className='text-lg font-medium'>Tech Used: </span> {text}</p>

            <div className="mt-4 flex justify-between">
                <a href={url} target='_blank'>
                    <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>

                <a href={github} target='_blank'>
                    <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>
            </div>
        </div>
    </article>
  )
}

export default ProjectsCard
