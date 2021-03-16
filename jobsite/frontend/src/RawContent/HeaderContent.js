import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiBuildings } from 'react-icons/bi';
import { BsAward } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';

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
		link: '/category/internships',
		icon: <BiBuildings />,
	},
	{
		name: 'IT Jobs',
		link: '/it-jobs',
		icon: <IoNewspaperOutline />,
	},
	{
		name: 'Govt Jobs',
		link: '/government-jobs',
		icon: <IoNewspaperOutline />,
	},
	{
		name: 'Interview Experiences',
		link: '/interview-experiences',
		icon: <IoNewspaperOutline />,
	},
	{
		name: 'Contribute',
		link: '/contribute-your-experience',
		icon: <BsAward />,
	},
];
export default Data;
