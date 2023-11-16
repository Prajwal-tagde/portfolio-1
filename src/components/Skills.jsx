import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className="py-20 align-element" id='skills'>
        <SectionTitle text='Skills' />

        <div className="py-16 ms-60 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
                skills.map((skill) => {
                    return <SkillsCard key={skill.id} {...skill} />
                })
            }
        </div>
    </section>
  )
}

export default Skills
