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
			<div className="grid grid-cols-2 px-6 mb-4">
				<div>
					<h2 className="text-2xl">{props.experience.establishment}</h2>
				</div>
				<div className="grid place-items-end">
					<h2>
						{props.experience.fromDate}-{props.experience.toDate}
					</h2>
				</div>
			</div>
			<div className="px-6">
				{/* Create a lorem ipsum list of items */}
				<div className="mb-2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In omnis architecto ut ipsum! Mollitia fugiat, incidunt maxime saepe vel commodi
					placeat quibusdam, nisi sit perspiciatis magnam expedita iste excepturi? Impedit.
				</div>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 4</li>
					<li>Item 5</li>
					<li>Item 6</li>
					<li>Item 7</li>
					<li>Item 8</li>
					<li>Item 9</li>
					<li>Item 10</li>
					<li>Item 11</li>
					<li>Item 12</li>
				</ul>
			</div>
		</>
	);
};

export default Experience;
