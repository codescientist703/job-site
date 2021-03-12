import React from 'react';
import Page404 from '../../pages/Page404/Page404';
const LayoutContainer = ({ children, is404 }) => {
	return <>{is404 ? <Page404 /> : <>{children}</>}</>;
};

export default LayoutContainer;
