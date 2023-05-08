import React from "react";

export interface IProject {
	link: string;
	title: string;
	description: string;
	techStack: string[];
}

const Project: React.FC<IProject> = ({ link, title, description, techStack }) => {
	return (
		<>
			<div className="card">
				<h1>{title}</h1>
				<p>{description}</p>
				{techStack.map((tech: string, i: number) => {
					return <span className="badge" key={i}>{tech}</span>;
				})}
			</div>
		</>
	);
};

export default Project;
