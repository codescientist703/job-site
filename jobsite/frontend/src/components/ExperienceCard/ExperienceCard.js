import React from 'react';
import {
	Card,
	CardHeader,
	CardDescription,
	CardCredits,
	JobRole,
	CompanyName,
	Paragraph,
	Icon,
	JobDetail,
	ReadMore,
	Contributer,
} from './ExperienceCard.elements';
import { BiBookContent, BiUser, BiBuildings } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { LinkButton } from '../../components';

function ExperienceCard({ type, company, name, jobtitle, description, slug }) {
	return (
		<Card type={type}>
			<CardHeader>
				<JobDetail>
					<Icon>
						<BiUser />
					</Icon>
					<JobRole>{jobtitle}</JobRole>
				</JobDetail>
				<JobDetail>
					<Icon>
						{' '}
						<BiBuildings />
					</Icon>

					<CompanyName>{company}</CompanyName>
				</JobDetail>
			</CardHeader>
			{type !== 'single' && (
				<CardDescription>
					<Icon>
						<BiBookContent />
					</Icon>
					<Paragraph>
						{description}...
						<LinkButton to={`job-experience/${slug}`}>Read More</LinkButton>
					</Paragraph>
				</CardDescription>
			)}
			<CardCredits>
				<Icon>
					<FaHandshake />
				</Icon>
				Contributed by : <Contributer> {name}</Contributer>
			</CardCredits>
		</Card>
	);
}

export default ExperienceCard;
