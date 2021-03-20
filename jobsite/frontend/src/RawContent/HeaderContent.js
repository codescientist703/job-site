import { AiOutlineHome } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { BsAward } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { RiGovernmentLine } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';
const Data = [
	{
		name: 'Home',
		link: '/',
		icon: <AiOutlineHome />,
	},
	{
		name: 'Jobs',
		link: '/category/jobs',
		icon: <CgWorkAlt />,
	},
	{
		name: 'Internships',
		link: '/category/internships',
		icon: <BiBuildings />,
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
