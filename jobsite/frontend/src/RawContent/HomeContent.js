import { BsServer, BsCode } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { RiGovernmentLine } from 'react-icons/ri';
import { GrUserWorker } from 'react-icons/gr';
import { BsCodeSlash } from 'react-icons/bs';
import { BiTime, BiBuildings } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';
import { IoNewspaperOutline } from 'react-icons/io5';

const Data = {
	homeTitle: 'Tired of Searching For Jobs?',
	homeContent:
		'Now easily browse through hundreds of jobs and never worry about using multiple job portals.',
	sec2Title: 'Find different types of jobs and apply for what you like...',
	sec2Content:
		'Our job portal is specially designed in mind to be very user friendly and easy to use. Often we have to search through different portals and this can be quite frustrating in the long run. Just imagine how easy it would become if every job is available in one place? This portal is designed specifically to solve that problem.',
	card: [
		{
			cardTitle: 'Private Jobs',
			cardContent: 'Explore various different jobs in the private sector.',
			cardIcon: <MdWork />,
			cardIconColor: '#7579e7',
		},
		{
			cardTitle: 'Government Jobs',
			cardContent:
				'Explore various lucrative government jobs in the public sector.',
			cardIcon: <RiGovernmentLine />,
			cardIconColor: '#7579e7',
		},
		{
			cardTitle: 'Internships',
			cardContent: 'Explore various internships if you are a student.',
			cardIcon: <BiBuildings />,
			cardIconColor: '#7579e7',
		},
		{
			cardTitle: 'IT Jobs',
			cardContent:
				'Explore various jobs in one the largest sector of the world.',
			cardIcon: <BsCodeSlash />,
			cardIconColor: '#7579e7',
		},
		{
			cardTitle: 'Part Time Jobs',
			cardContent:
				'We have got you covered if you do not have time for full time commitments.',
			cardIcon: <BiTime />,
			cardIconColor: '#7579e7',
		},
		{
			cardTitle: 'Interview Experiences',
			cardContent: 'Learn from the interview experiences of other people.',
			cardIcon: <IoNewspaperOutline />,
			cardIconColor: '#7579e7',
		},
	],
};
export default Data;
