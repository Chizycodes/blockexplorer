import React from 'react';
import Search from './Search';

const Hero = () => {
	return (
		<div style={{ backgroundImage: "url('/images/bg.jpg')" }} className="h-60 w-full">
			<div>
				<Search />
			</div>
		</div>
	);
};

export default Hero;
