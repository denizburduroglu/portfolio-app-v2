import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineLeft, AiOutlineRight, AiOutlineDownload } from "react-icons/ai";
import treesImage from "./assets/images/trees.jpg";
import Navbar from "./components/Navbar";
import "./App.css";
import { resume } from "./data/Resume.ts";
import Experience from "./components/Experience.component.tsx";

function App() {
	const [experienceIndex, setExperienceIndex] = useState(0);

	return (
		<div>
			<Navbar />
			<div>
				<section className="bg-gray-100">
					<h1>Home</h1>
					<img src={treesImage} className="w-48" alt="" />
				</section>
				<section className="bg-gray-200 w-screen container px-4 mx-auto">
					<div className="px-6 mb-8">
						<h1 className="mb-4 text-4xl w-full">About</h1>
					</div>

					<div className="grid grid-cols-8 px-6 mb-8">
						<div className="col-span-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quaerat ipsam asperiores in numquam ipsa qui corrupti, debitis odio
							adipisci, excepturi vero placeat minima laboriosam! Veritatis, officiis. Accusamus, dolore aperiam! Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Et cumque nemo magnam? Cupiditate eos vero accusantium sapiente rerum consequuntur cum, recusandae
							repellat perspiciatis placeat ut voluptas. Consequuntur odio ullam ea?
						</div>
						<div className="col-span-1"></div>
						<div className="col-span-3">
							<img src={treesImage} className="w-64 mb-4 border-black border-4" alt="" />
							<div className="grid grid-cols-2">
								<div>
									<ul>
										<li>JavaScript</li>
										<li>TypeScript</li>
										<li>Angular</li>
										<li>React</li>
									</ul>
								</div>
								<div>
									<ul>
										<li>C#</li>
										<li>.NET</li>
										<li>GraphQL</li>
										<li>Rest APIs</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-gray-300 w-screen container px-4 mx-auto">
					<div className="grid grid-cols-4 px-6 mb-8">
						<h1 className="mb-4 text-4xl w-full">Experience</h1>
						<div className="col-span-2 flex items-center justify-end">
							<button disabled={experienceIndex <= 0} onClick={() => setExperienceIndex(experienceIndex - 1)} className="disabled:opacity-50">
								<AiOutlineLeft className="w-6 h-6" />
							</button>
							{experienceIndex + 1}/{resume.length}
							<button
								disabled={experienceIndex >= resume.length - 1}
								onClick={() => setExperienceIndex(experienceIndex + 1)}
								className="disabled:opacity-50"
							>
								<AiOutlineRight className="w-6 h-6" />
							</button>
						</div>
						<div className="col-span-1 flex items-center justify-end">
							<button>
								<AiOutlineDownload className="w-6 h-6" />
							</button>
						</div>
					</div>
					{resume.slice(experienceIndex, experienceIndex + 1).map((experience: any, i) => {
						return <Experience experience={experience} key={experienceIndex} />;
					})}
				</section>

				<section className="bg-gray-400">
					<h1 className="mb-4 text-4xl w-full">Projects</h1>
				</section>

				<section id="contact" className="h-screen w-screen container px-4 mx-auto">
					<div className="px-6">
						<h1 className="mb-4 text-4xl w-full">Contact</h1>
						<p className="mb-8">Get in touch.</p>
					</div>

					<div className="grid grid-cols-2">
						<div className="flex px-6">
							<form className="space-y-8" target="_blank" action="https://formsubmit.co/denizburduroglu@gmail.com" method="POST">
								<input type="text" name="name" className="border-black border-b-2 w-full p-y-2" placeholder="Name" required />
								<input type="email" name="email" className="border-black border-b-2 w-full p-y-2" placeholder="Email Address" required />
								<textarea placeholder="Message" className="border-black border-b-2 w-full p-y-2" name="message" required></textarea>
								<button type="submit" className="default-button bg-red-700 p-2">
									Submit Form
								</button>
							</form>
						</div>
						<div className="border-black border-l-2 px-6">
							<h1 className="mb-4 text-2xl w-full serif">Deniz Burduroglu</h1>
							<p className="mb-8">Full-Stack Developer</p>
							<div className="grid grid-cols-2">
								<p className="mb-4">RESIDENCE:</p>
								<p>Oakland, CA</p>
							</div>
							<div className="grid grid-cols-2">
								<p className="mb-4">E-MAIL:</p>
								<p>denizburduroglu@gmail.com</p>
							</div>
							<div className="flex">
								<a href="https://github.com/denizburduroglu" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-1">
									<AiFillGithub className="w-11 h-11" />
								</a>
								<a href="https://www.linkedin.com/in/deniz-burduroglu/" aria-label="Linkedin" target="_blank" rel="noreferrer" className="p-1">
									<AiFillLinkedin className="w-11 h-11" />
								</a>
								<a href="mailto:denizburduroglu@gmail.com" aria-label="Linkedin" target="_blank" rel="noreferrer" className="p-1">
									<AiFillMail className="w-11 h-11" />
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
