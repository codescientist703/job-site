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
	Btn,
} from './JobCard.elements';
import { AiFillHome } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
const JobCard = () => {
	const str =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti quaerat molestiae repellat facilis voluptatum vitae eligendi quod. Quos aperiam saepe asperiores tenetur amet sint itaque nostrum sunt distinctio fugit.';

	return (
		<Card>
			<CardTop>
				<JobDetails>
					<JobTitle>Web Developer</JobTitle>
					<JobCompany>Flipkart</JobCompany>
				</JobDetails>
				<StarIcon />
			</CardTop>

			<CardMiddle>
				<Item>
					<ItemTitle>
						<ItemIcon>
							<AiFillHome />
						</ItemIcon>
						&nbsp;
						Location
					</ItemTitle>
					<ItemDescription>Mumbai</ItemDescription>
				</Item>

				<Item>
					<ItemTitle>
						<ItemIcon >
							<BiTimeFive />
						</ItemIcon>
						&nbsp;
						Date
					</ItemTitle>
					<ItemDescription>20-11-2021</ItemDescription>
				</Item>

				<Item>
					<ItemTitle>
						<ItemIcon >
							<BiTimeFive />
						</ItemIcon>
						&nbsp;
						Salary
					</ItemTitle>
					<ItemDescription>20,000</ItemDescription>
				</Item>

				<Item>
					<ItemTitle>
						<ItemIcon >
							<BiTimeFive />
						</ItemIcon>
						&nbsp;
						Experience
					</ItemTitle>
					<ItemDescription>3+</ItemDescription>
				</Item>
			</CardMiddle>

			<CardBottom>
				<JobDescription>
					{str.length > 100 ? `${str.slice(0, 50)}...` : str}
				</JobDescription>
				<Btn>View More &gt;</Btn>
			</CardBottom>
		</Card>
	);
};

export default JobCard;
