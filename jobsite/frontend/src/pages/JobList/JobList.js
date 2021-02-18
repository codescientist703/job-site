import React from 'react';
import { JobCard, Breadcumb } from '../../components';

const JobList = () => {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'category', link: '/category' },
	];
	return (
		<div>
			<Breadcumb breadData={breadData} />
			<JobCard />
		</div>
	);
};

export default JobList;
