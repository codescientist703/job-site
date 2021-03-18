// import { MdWork } from 'react-icons/md';
import { CgWorkAlt } from 'react-icons/cg';
import { RiGovernmentLine } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';
import { BiTime, BiBuildings } from 'react-icons/bi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { theme } from '../theme';

const Data = {
	homeTitle: 'Tired of Searching For Jobs?',
	homeContent:
		'Now easily browse through hundreds of jobs and forget the worry of finding jobs on multiple job portals',
	sec2Title: 'Find different types of jobs and apply for what you like...',
	sec2Content:
		'Our job portal is specially designed in mind to be very user friendly and easy to use. Often we have to search through different portals and this can be quite frustrating in the long run. Just imagine how easy it would become if every job is available in one place? This portal is designed specifically to solve that problem.',
	card: [
		{
			cardTitle: 'Private Jobs',
			cardContent: 'Explore various different jobs in the private sector',
			cardIcon: <CgWorkAlt />,
			cardIconColor: theme.primaryColor,
			cardLink: '/category/jobs',
		},
		{
			cardTitle: 'Government Jobs',
			cardContent:
				'Explore various lucrative government jobs in the public sector',
			cardIcon: <RiGovernmentLine />,
			cardIconColor: theme.primaryColor,
			cardLink: '/category/government-jobs',
		},
		{
			cardTitle: 'Internships',
			cardContent: 'Explore various internships if you are a student',
			cardIcon: <BiBuildings />,
			cardIconColor: theme.primaryColor,
			cardLink: '/category/internships',
		},
		{
			cardTitle: 'IT Jobs',
			cardContent:
				'Explore various jobs in one the largest sector of the world',
			cardIcon: <BsCodeSlash />,
			cardIconColor: theme.primaryColor,
			cardLink: '/category/it-jobs',
		},
		{
			cardTitle: 'Part Time Jobs',
			cardContent:
				'We have got you covered if you do not have time for full time commitments',
			cardIcon: <BiTime />,
			cardIconColor: theme.primaryColor,
			cardLink: '/category',
		},
		{
			cardTitle: 'Interview Experiences',
			cardContent: 'Learn from the interview experiences of other people',
			cardIcon: <IoNewspaperOutline />,
			cardIconColor: theme.primaryColor,
			cardLink: '/interview-experiences',
		},
	],
};
export default Data;
