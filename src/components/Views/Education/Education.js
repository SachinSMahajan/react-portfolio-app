import React from 'react'
import Layout from './../../Layout/Layout'
import { SectionTitle, Paragraph } from '../../../GlobalStyle'

import { EducationItem, University, Degree } from './EducationStyle'


const Education = ({ profileDetails }) => {
    return (
        <Layout profileDetails={profileDetails}>
            <div>
                <SectionTitle>Education</SectionTitle>
                <ul>
                    {
                        profileDetails.education.map((education, i) => (
                            <EducationItem key={i}>
                                <University>
                                    {education.position}
                                </University>
                                <div>
                                    <Degree>
                                        {education.studyType} , {education.area}
                                    </Degree> {' '}
                                    <span>$sdot;</span>
                                    <span>
                                        {education.start.year} to {education.end.year}
                                    </span>
                                </div>
                                <Paragraph>{ }education.description</Paragraph>
                            </EducationItem>
                        ))
                    }
                </ul>
            </div>
        </Layout>
    )
}

export default Education