import { BreadContainer, BreadItems, BreadLink } from './Breadcumb.elements';

const Breadcumb = () => {
	return (
		<BreadContainer>
			<BreadItems>
				<BreadLink>Home&nbsp;/&nbsp;</BreadLink>
			</BreadItems>
			<BreadItems>
				<BreadLink>Category&nbsp;/&nbsp;</BreadLink>
			</BreadItems>
			<BreadItems>
				<BreadLink>Jobs</BreadLink>
			</BreadItems>
		</BreadContainer>
	);
};

export default Breadcumb;
