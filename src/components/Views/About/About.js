import React from 'react'
import Layout from './../../Layout/Layout'
import { SectionTitle, Pill, Paragraph } from '../../../GlobalStyle'
import { ProfileLink } from './AboutStyle'
import { Tag } from 'carbon-components-react';
const About = ({ profileDetails }) => {
    return (
        <Layout profileDetails={profileDetails}>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>{profileDetails.basics.summary}</Paragraph>
            </div>
            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {
                        profileDetails.skills.map(skill => (
                            <Tag key={skill.name} type="high-contrast">{skill.name}</Tag>
                        ))
                    }
                </div>
            </div>
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <ul>
                    {
                        profileDetails.basics.profiles.map((profile, i) => (
                            <ProfileLink key={profile.network}>
                                {i !== 0 && '| '}
                                <a href={profile.url}
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    {profile.network}
                                </a>
                            </ProfileLink>
                        ))
                    }
                </ul>
            </div>
        </Layout>
    )
}
export default About; 
