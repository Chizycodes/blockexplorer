import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<div>
			<NavBar />
			<div className="px-4 mx-auto lg:max-w-7xl md:px-8 py-10 min-h-[90vh]">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
