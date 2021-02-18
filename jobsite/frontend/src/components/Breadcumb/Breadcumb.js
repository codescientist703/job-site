import { BreadContainer, BreadItems, BreadLink } from './Breadcumb.elements';

const Breadcumb = ({ breadData }) => {
	return (
		<BreadContainer>
			{breadData.map((data, index) => (
				<BreadItems key={index}>
					<BreadLink to={data.link}>
						{data.name}
						&nbsp;
						{!(index === breadData.length - 1) && `/`}
						&nbsp;
					</BreadLink>
				</BreadItems>
			))}
		</BreadContainer>
	);
};

export default Breadcumb;
