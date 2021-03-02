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
					<JobTitle>{jobtitle}</JobTitle>
					<JobCompany>{company}</JobCompany>
				</JobDetails>
				<StarIcon />
			</CardTop>
			<CardMiddle>
				<Item>
					<ItemTitle>
						<ItemIcon>
							<AiFillHome />
						</ItemIcon>
						&nbsp; Location
					</ItemTitle>
					<ItemDescription>{location}</ItemDescription>
				</Item>
				<Item>
					<ItemTitle>
						<ItemIcon>
							<BiTimeFive />
						</ItemIcon>
						&nbsp; Date
					</ItemTitle>
					<ItemDescription>{date}</ItemDescription>
				</Item>
				<Item>
					<ItemTitle>
						<ItemIcon>
							<BiTimeFive />
						</ItemIcon>
						&nbsp; Salary
					</ItemTitle>
					<ItemDescription>
						{salary === -1 ? 'Not Specified' : `₹ ${salary} /annum`}
					</ItemDescription>
				</Item>
				<Item>
					<ItemTitle>
						<ItemIcon>
							<BiTimeFive />
						</ItemIcon>
						&nbsp; Experience
					</ItemTitle>
					<ItemDescription>{experience} years</ItemDescription>
				</Item>
			</CardMiddle>
			{type !== 'single' && (
				<CardBottom>
					<JobDescription>{description}</JobDescription>
					<LinkButton to={`/${slug}`}>View More &gt;</LinkButton>
				</CardBottom>
			)}
		</Card>
	);
};

export default JobCard;
