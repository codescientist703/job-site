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
	Contributer,
} from './ExperienceCard.elements';
import { BiBookContent, BiUser, BiBuildings } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { LinkButton } from '../../components';
import Skeleton from 'react-loading-skeleton';

function ExperienceCard({ type, company, name, jobtitle, description, slug }) {
	return (
		<Card type={type}>
			<CardHeader>
				<JobDetail>
					{jobtitle ? (
						<Icon>
							<BiUser />
						</Icon>
					) : (
						<Skeleton width={100} />
					)}
					<JobRole>{jobtitle || <Skeleton />}</JobRole>
				</JobDetail>
				<JobDetail>
					{company ? (
						<>
							<Icon>
								{' '}
								<BiBuildings />
							</Icon>
							<CompanyName>{company}</CompanyName>
						</>
					) : (
						<Skeleton width={100} />
					)}
				</JobDetail>
			</CardHeader>
			{type !== 'single' && (
				<CardDescription>
					{description ? (
						<>
							<Icon>
								<BiBookContent />
							</Icon>
							<Paragraph>
								{description}...
								<LinkButton to={`job-experience/${slug}`}>Read More</LinkButton>
							</Paragraph>
						</>
					) : (
						<div>
							<div>
								<Skeleton width={100} count={5} />
							</div>
							<div>
								<Skeleton width={100} count={5} />
							</div>
						</div>
					)}
				</CardDescription>
			)}
			<CardCredits>
				{name ? (
					<>
						<Icon>
							<FaHandshake />
						</Icon>
						Contributed by : <Contributer> {name}</Contributer>
					</>
				) : (
					<Skeleton />
				)}
			</CardCredits>
		</Card>
	);
}

export default ExperienceCard;
