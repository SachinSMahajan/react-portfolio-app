import React from 'react'
import { SectionTitle } from '../../../GlobalStyle'
import Layout from '../../Layout/Layout'
import { WorkItem, WorkTitle } from '../Experience/ExperienceStyle'
import { SkillContainer } from './ProjectsStyle'
import { Tag } from 'carbon-components-react';

const Projects = ({ profileDetails }) => {
    return (
        <Layout profileDetails={profileDetails}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {profileDetails.projects.map((project, i) => (
                        <WorkItem key={i}>
                            <WorkTitle>{project.displayName}</WorkTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {
                                    [...project.languages, ...project.libraries].map((item, i) => (
                                        <Tag key={i} type="high-contrast">{item}</Tag>
                                    ))
                                }
                            </SkillContainer>
                        </WorkItem>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default Projects