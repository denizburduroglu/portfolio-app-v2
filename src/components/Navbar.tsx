import React from "react";

const Navbar: React.FC = () => {
	return (
		<div className="sticky top-0 bg-dark-shade z-50">
			<nav className="left-0 right-0 flex items-center justify-between flex-wrap p-6">
				<div className="flex items-center flex-shrink-0 mr-6">
					<a href="#introduction">
						<span className="font-semibold text-xl tracking-tight">Deniz Burduroglu</span>
					</a>
				</div>
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded border-black hover:text-border-dark-accent hover:border-dark-accent">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<a href="#about" className="mt-4 lg:mt-0 hover:text-border-dark-accent mr-4">
							About
						</a>
						<a href="#experience" className="mt-4 lg:mt-0 hover:border-dark-accent mr-4">
							Experience
						</a>
						<a href="#projects" className="mt-4 lg:mt-0 hover:border-dark-accent mr-4">
							Projects
						</a>
						<a href="#contact" className="mt-4 lg:mt-0 hover:border-dark-accent">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
