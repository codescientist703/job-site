import { AiOutlineHome } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { BsAward, BsCodeSlash } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { RiGovernmentLine } from 'react-icons/ri';

const Data = [
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
export default Data;
