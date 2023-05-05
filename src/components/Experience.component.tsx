import React from "react";

export interface IExperience {
  fromDate: string;
	toDate: string;
	establishment: string;
	role: string;
	summary: string;
	items: string[];
}

export type ExperienceProps = {
	experience: IExperience;
};

const Experience: React.FC<ExperienceProps> = (props) => {
	return (
		<>
			<div className="grid grid-cols-2 mb-4">
				<div>
					<h2 className="text-2xl">{props.experience.establishment}</h2>
				</div>
				<div className="grid place-items-end">
					<h2>
						{props.experience.fromDate}-{props.experience.toDate}
					</h2>
				</div>
			</div>
			<div>
				{/* Create a lorem ipsum list of items */}
				<div className="mb-2">
					{props.experience.summary}
				</div>
				<ul>
					{
						props.experience.items.map((item: string, i) => {
							return (
								<li key={i}>{item}</li>
							)
						})
					}
				</ul>
			</div>
		</>
	);
};

export default Experience;
