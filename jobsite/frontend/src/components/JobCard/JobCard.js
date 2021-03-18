import {
	Card,
	CardTop,
	CardMiddle,
	CardBottom,
	JobDetails,
	JobTitle,
	JobCompany,
	JobTag,
	Item,
	ItemIcon,
	ItemTitle,
	ItemDescription,
	ShareIconDiv,
} from './JobCard.elements';
import { AiFillHome } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { LinkButton, ShareDropdown } from '../../components';
import Skeleton from 'react-loading-skeleton';

const convertToLacs = (number) => {
	if (number >= 100000) {
		return `${number / 100000} LPA`;
	} else return `${number}`;
};

const JobCard = ({
	type,
	jobtitle,
	company,
	location,
	date,
	salary,
	experience,
	part_time,
	slug,
}) => {
	return (
		<Card type={type}>
			<CardTop>
				<JobDetails>
					<JobTitle>{jobtitle || <Skeleton />}</JobTitle>
					<JobCompany>{company || <Skeleton width={80} />}</JobCompany>
				</JobDetails>
				<ShareIconDiv type={type}>
					{jobtitle ? (
						<ShareDropdown />
					) : (
						<Skeleton circle={true} height={30} width={30} />
					)}
				</ShareIconDiv>
			</CardTop>
			<CardMiddle type={type}>
				<Item>
					{location ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<AiFillHome />
								</ItemIcon>
								Location
							</ItemTitle>
							<ItemDescription>{location}</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={70} />
							</div>
							<div>
								<Skeleton width={70} />
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
								Date
							</ItemTitle>
							<ItemDescription>{date}</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={70} />
							</div>
							<div>
								<Skeleton width={70} />
							</div>
						</>
					)}
				</Item>
				<Item>
					{salary >= 0 ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<BiTimeFive />
								</ItemIcon>
								Salary
							</ItemTitle>
							<ItemDescription>
								{salary === 0 ? 'Not Specified' : `₹ ${convertToLacs(salary)}`}
							</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={70} />
							</div>
							<div>
								<Skeleton width={70} />
							</div>
						</>
					)}
				</Item>
				<Item>
					{experience >= 0 ? (
						<>
							<ItemTitle>
								<ItemIcon>
									<BiTimeFive />
								</ItemIcon>
								Experience
							</ItemTitle>
							<ItemDescription>
								{experience === 0 ? 'Fresher' : `${experience} years`}
							</ItemDescription>
						</>
					) : (
						<>
							<div>
								<Skeleton width={70} />
							</div>
							<div>
								<Skeleton width={70} />
							</div>
						</>
					)}
				</Item>
			</CardMiddle>
			{type !== 'single' && (
				<CardBottom>
					{part_time === false || part_time === true ? (
						<JobTag>{part_time ? 'Part' : 'Full'} Time Job</JobTag>
					) : (
						<Skeleton width={100} />
					)}
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
