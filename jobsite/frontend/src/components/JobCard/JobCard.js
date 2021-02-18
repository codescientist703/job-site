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
	ItemTitle,
	ItemDescription,
	Btn
} from './JobCard.elements';

const JobCard = () => {

	const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti quaerat molestiae repellat facilis voluptatum vitae eligendi quod. Quos aperiam saepe asperiores tenetur amet sint itaque nostrum sunt distinctio fugit.';

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
						Location
					</ItemTitle>
					<ItemDescription>
						Mumbai
					</ItemDescription>
				</Item>

				<Item>
					<ItemTitle>
						Date
					</ItemTitle>
					<ItemDescription>
						20-11-2021
					</ItemDescription>
				</Item>

				<Item>
					<ItemTitle>
						Salary
					</ItemTitle>
					<ItemDescription>
						20,000
					</ItemDescription>
				</Item>

				<Item>
					<ItemTitle>
						Experience
					</ItemTitle>
					<ItemDescription>
						3+
					</ItemDescription>
				</Item>
			</CardMiddle>

			<CardBottom>
				<JobDescription>
					{
						str.length > 100 ? `${str.slice(0, 50)}...` : str
					}

				</JobDescription>
				<Btn>
					View More &gt;
				</Btn>
			</CardBottom>
		</Card>
	);
};

export default JobCard;
