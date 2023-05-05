import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer: React.FC = () => {
	return (
		<>
			<footer className="bg-gray-900 text-white py-6 px-2 mt-4">
				<div className="container mx-auto flex justify-between items-center">
					<p className="text-sm">&copy; Deniz Burduroglu {new Date().getFullYear()}</p>
					<div className="flex items-center">
						<a href="https://github.com/denizburduroglu" target="_blank" aria-label="GitHub" rel="noopener noreferrer" className="mr-4">
							<AiFillGithub className="text-white hover:text-gray-400 transition-colors duration-300 w-6 h-6" />
						</a>
						<a href="https://www.linkedin.com/in/deniz-burduroglu/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer" className="mr-4">
							<AiFillLinkedin className="text-white hover:text-gray-400 transition-colors duration-300 w-6 h-6" />
						</a>
						<a href="mailto:denizburduroglu@gmail.com" target="_blank" aria-label="Email" rel="noopener noreferrer">
							<AiFillMail className="text-white hover:text-gray-400 transition-colors duration-300 w-6 h-6" />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
