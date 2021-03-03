import {
	Card,
	CardTop,
	CardMiddle,
	CardBottom,
	JobDetails,
	JobTitle,
	JobCompany,
	JobDescription,
	StarIcon,
	Item,
	ItemIcon,
	ItemTitle,
	ItemDescription,
} from './JobCard.elements';
import { AiFillHome } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { LinkButton } from '../../components';
import Skeleton from 'react-loading-skeleton';
const JobCard = ({
	type,
	jobtitle,
	company,
	location,
	date,
	salary,
	experience,
	description,
	slug,
}) => {
	return (
		<Card type={type}>
			<CardTop>
				<JobDetails>
					<JobTitle>{jobtitle || <Skeleton />}</JobTitle>
					<JobCompany>{company || <Skeleton width={100} />}</JobCompany>
				</JobDetails>
				{jobtitle ? <StarIcon /> : <Skeleton width={30} />}
			</CardTop>
			<CardMiddle>
				<Item>
					{location ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<AiFillHome />
								</ItemIcon>
								&nbsp; Location
							</ItemTitle>
							<ItemDescription>{location}</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={90} />
							</div>
							<div>
								<Skeleton width={90} />
							</div>
						</>
					)}
				</Item>
				<Item>
					{date ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<BiTimeFive />
								</ItemIcon>
								&nbsp; Date
							</ItemTitle>
							<ItemDescription>{date}</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={90} />
							</div>
							<div>
								<Skeleton width={90} />
							</div>
						</>
					)}
				</Item>
				<Item>
					{salary ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<BiTimeFive />
								</ItemIcon>
								&nbsp; Salary
							</ItemTitle>
							<ItemDescription>
								{salary === -1 ? 'Not Specified' : `₹ ${salary} /annum`}
							</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={90} />
							</div>
							<div>
								<Skeleton width={90} />
							</div>
						</>
					)}
				</Item>
				<Item>
					{experience ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<BiTimeFive />
								</ItemIcon>
								&nbsp; Experience
							</ItemTitle>
							<ItemDescription>{experience} years</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={90} />
							</div>
							<div>
								<Skeleton width={90} />
							</div>
						</>
					)}
				</Item>
			</CardMiddle>
			{type !== 'single' && (
				<CardBottom>
					<JobDescription>{description || <Skeleton />}</JobDescription>
					{slug ? (
						<LinkButton to={`/${slug}`}>View More &gt;</LinkButton>
					) : (
						<Skeleton width={100} />
					)}
				</CardBottom>
			)}
		</Card>
	);
};

export default JobCard;
