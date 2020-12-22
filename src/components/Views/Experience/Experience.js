import React from 'react'
import Layout from '../../Layout/Layout'
import { SectionTitle, Paragraph } from '../../../GlobalStyle'
import { WorkItem, WorkTitle, JobTitle } from './ExperienceStyle'

const Experience = ({ profileDetails }) => {
    return (
        <Layout profileDetails={profileDetails}>
            <div>
                <SectionTitle>Experience</SectionTitle>
                <ul>
                    {profileDetails.work.map((exp, i) => (
                        <WorkItem key={i}>
                            <WorkTitle>{exp.position}</WorkTitle>
                            <div>
                                <JobTitle>
                                    {exp.company}
                                </JobTitle>
                                <span>{exp.location}</span>
                                <span>$sdot</span>
                                <span>{exp.start.year} to {exp.end.year}</span>
                            </div>
                            <Paragraph>{exp.summary}</Paragraph>
                        </WorkItem>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default Experience