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
						<JobDetail>
							<Icon>
								<BiBookContent />
							</Icon>
							<Paragraph>
								{description}...&nbsp;
								<LinkButton to={`job-experience/${slug}`}>Read More</LinkButton>
							</Paragraph>
						</JobDetail>
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
					<JobDetail>
						<Icon>
							<FaHandshake />
						</Icon>
						Contributed by : &nbsp;<Contributer> {name}</Contributer>
					</JobDetail>
				) : (
					<Skeleton />
				)}
			</CardCredits>
		</Card>
	);
}

export default ExperienceCard;
