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
        <h1 className="text-2xl">{title}</h1>
        <a href={link}></a>
				<p>{description}</p>
				<div>
				{techStack.map((tech: string, i: number) => {
					return <span className="badge" key={i}>{tech}</span>;
				})}
				</div>
			</div>
		</>
	);
};

export default Project;
