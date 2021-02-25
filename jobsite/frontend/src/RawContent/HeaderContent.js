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
		link: '/category/jobname',
		icon: <BiBuildings />,
	},
	{
		name: 'Job Experience',
		link: '/job-experience',
		icon: <BiBuildings />,
	},
	{
		name: 'Single Experience',
		link: '/job-experience/exp',
		icon: <BiBuildings />,
	},
];
export default Data;
