import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiBuildings } from 'react-icons/bi';

const Data = [
	{
		name: 'Home',
		link: '/',
		icon: <AiOutlineHome />,
	},
	{
		name: 'Jobs',
		link: '/category/jobs',
		icon: <HiOutlineOfficeBuilding />,
	},
	{
		name: 'Internships',
		link: '/category/internship',
		icon: <BiBuildings />,
	},
	{
		name: 'Job Experience',
		link: '/job-experience',
		icon: <BiBuildings />,
	},
	{
		name: 'Contribute',
		link: '/contribute-your-experience',
		icon: <BiBuildings />,
	},
];
export default Data;
