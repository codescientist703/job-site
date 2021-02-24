import React from 'react'
import Container from '../../components/Container/Container';
import {
    Title,
    Paragraph,

} from './JobExperience.elements';
import { Breadcumb, ExperienceCard } from '../../components'

function JobExperience() {

    const breadData = [
        { name: 'home', link: '/' },
        { name: 'job experience', link: '/job-experience' }
    ];

    return (
        <Container>
            <Breadcumb breadData={breadData} />
            <Title>Interview Experiences</Title>
            <Paragraph>Find interview experiences of your dream company hear!!</Paragraph>

            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </Container>
    )
}

export default JobExperience;