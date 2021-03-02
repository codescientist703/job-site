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

function ExperienceCard({ type }) {
	return (
		<Card type={type}>
			<CardHeader>
				<JobDetail>
					<Icon>
						<BiUser />
					</Icon>
					<JobRole>Software Engineer</JobRole>
				</JobDetail>
				<JobDetail>
					<Icon>
						{' '}
						<BiBuildings />
					</Icon>

					<CompanyName>Amazon</CompanyName>
				</JobDetail>
			</CardHeader>
			{type !== 'single' && (
				<CardDescription>
					<Icon>
						<BiBookContent />
					</Icon>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						commodi recusandae officia iste odit mollitia fugiat in deserunt
						debitis, facilis hic a quia blanditiis ex assumenda, amet velit
						incidunt magni...
						<ReadMore>Read More</ReadMore>
					</Paragraph>
				</CardDescription>
			)}
			<CardCredits>
				<Icon>
					<FaHandshake />
				</Icon>
				Contributed by : <Contributer> Job Lele</Contributer>
			</CardCredits>
		</Card>
	);
}

export default ExperienceCard;
