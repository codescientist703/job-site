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
		link: '/category/internship',
		icon: <BiBuildings />,
	},
	{
		name: 'Interview Experience',
		link: '/job-experience',
		icon: <IoNewspaperOutline />,
	},
	{
		name: 'Contribute',
		link: '/contribute-your-experience',
		icon: <BsAward />,
	},
	{
		name: 'Privacy Policy',
		link: '/privacy-policy',
		icon: <BiBuildings />,
	},
];
export default Data;
