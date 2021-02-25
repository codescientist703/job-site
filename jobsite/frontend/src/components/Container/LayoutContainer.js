import React from 'react';
import { Page404 } from '../../pages';
const LayoutContainer = ({ children, is404 }) => {
	return <>{is404 ? <Page404 /> : <>{children}</>}</>;
};

export default LayoutContainer;
