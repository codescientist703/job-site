import { AiOutlineHome } from 'react-icons/ai';
import { BiBuildings, BiBorderAll } from 'react-icons/bi';
import { BsAward, BsCodeSlash, BsBuilding } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { RiGovernmentLine } from 'react-icons/ri';

const desktopData = [
	{
		name: 'Home',
		link: '/',
		icon: <AiOutlineHome />,
		isDropDown: false,
	},
	{
		name: 'Jobs',
		link: '/category/jobs',
		icon: <CgWorkAlt />,
		isDropDown: true,
		dropDownList: [
			{
				name: 'All Jobs',
				link: '/category/all-jobs',
				icon: <BsBuilding />,
			},
			{
				name: 'IT Jobs',
				link: '/category/it-jobs',
				icon: <BsCodeSlash />,
			},
			{
				name: 'Govt Jobs',
				link: '/category/government-jobs',
				icon: <RiGovernmentLine />,
			},
			{
				name: 'Private Jobs',
				link: '/category/jobs',
				icon: <CgWorkAlt />,
			},
		],
	},
	{
		name: 'Internships',
		link: '/category/internships',
		icon: <BiBuildings />,
		isDropDown: false,
	},
	{
		name: 'Interview Experiences',
		link: '/interview-experiences',
		icon: <IoNewspaperOutline />,
		isDropDown: false,
	},
	{
		name: 'Contribute',
		link: '/contribute-your-experience',
		icon: <BsAward />,
		isDropDown: false,
	},
];

const mobileData = [
	{
		name: 'Home',
		link: '/',
		icon: <AiOutlineHome />,
	},
	{
		name: 'All Jobs',
		link: '/category/all-jobs',
		icon: <BsBuilding />,
	},
	{
		name: 'Private Jobs',
		link: '/category/jobs',
		icon: <CgWorkAlt />,
	},
	{
		name: 'IT Jobs',
		link: '/category/it-jobs',
		icon: <BsCodeSlash />,
	},
	{
		name: 'Govt Jobs',
		link: '/category/government-jobs',
		icon: <RiGovernmentLine />,
	},
	{
		name: 'Internships',
		link: '/category/internships',
		icon: <BiBuildings />,
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

export { desktopData, mobileData };
