import React from "react";
import { AiOutlineLink } from "react-icons/ai";
export interface IProject {
	link: string;
	title: string;
	description: string;
	techStack: string[];
}

const Project: React.FC<IProject> = ({ link, title, description, techStack }) => {
	return (
		<>
			<a href={link}>
				<div className="card">
					<div className="flex justify-between">
						<h1 className="text-2xl">{title}</h1>
						<AiOutlineLink className="w-6 h-6" />
					</div>
					<p>{description}</p>
					<div>
						{techStack.map((tech: string, i: number) => {
							return (
								<span className="badge" key={i}>
									{tech}
								</span>
							);
						})}
					</div>
				</div>
			</a>
		</>
	);
};

export default Project;
