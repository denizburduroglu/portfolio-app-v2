import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineDownload } from "react-icons/ai";
import profileImage from "./assets/images/profile.jpg";
import Navbar from "./components/Navbar";
import "./App.css";
import { resume } from "./data/Resume.ts";
import Experience from "./components/Experience.component.tsx";
import ResumePDF from "./assets/pdf/resume.pdf";
import Footer from "./components/Footer.tsx";
import Project, { IProject } from "./components/Project.tsx";
import { projects } from "./data/Projects.ts";
import React from "react";

function App() {
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("loading-text");
				} else {
					entry.target.classList.remove("loading-text");
				}
			});
		});
		const hiddenElements = document.querySelectorAll(".loading-animation");
		hiddenElements.forEach((element) => {
			observer.observe(element);
		});
	}, []);

	const [experienceIndex, setExperienceIndex] = useState(0);

	return (
		<div className="bg-dark-shade">
			<Navbar />
			<div>
				<section id="introduction">
					<div className="introduction h-screen-1/2 grid place-items-center">
						<div>
							<p className="text-2xl drop-shadow-[0_1px_8px_rgba(0,0,0)] w-full">Hi, my name is</p>
							<h1 className="text-6xl drop-shadow-[0_1px_8px_rgba(0,0,0)] w-full">Deniz Burduroglu</h1>
							<p className="text-4xl drop-shadow-[0_1px_8px_rgba(0,0,0)] w-full">I'm a Full-Stack Developer</p>
						</div>
					</div>
				</section>

				<section id="about" className="loading-animation container p-10 mx-auto">
					<div className="mb-8">
						<h1 className="mb-4 text-4xl">About</h1>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 mb-8">
						<div>
							<p>
								I started my journey in software development building small websites and applications for personal projects. As I learned more about
								programming, I discovered my passion for creating elegant, efficient code and decided to pursue a career as a developer.
							</p>
							<p>
								Over the years, I've gained experience working with a wide range of programming languages, including JavaScript, TypeScript, and C#.
								I'm comfortable working with both front-end and back-end technologies and have experience building applications using popular
								frameworks such as React, Angular, and Node.js.
							</p>
							<div className="flex mb-8">
								<div className="w-36">
									<ul>
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
									</ul>
								</div>
							</div>
						</div>
						<div className="mx-auto">
							<img src={profileImage} className="rounded-md w-96 mb-4 border-black border-2" alt="" />
						</div>
					</div>
				</section>

				<section id="experience" className="loading-animation container p-10 mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 mb-8">
						<h1 className="mb-4 text-4xl">Experience</h1>
						<div className="flex items-center md:justify-end">
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
							<a className="ml-4" href={ResumePDF} download="Resume.pdf">
								<AiOutlineDownload className="w-6 h-6" />
							</a>
						</div>
					</div>
					{resume.slice(experienceIndex, experienceIndex + 1).map((experience: any) => {
						return <Experience experience={experience} key={experienceIndex} />;
					})}
				</section>

				<section id="projects" className="loading-animation container p-10 mx-auto">
					<h1 className="mb-4 text-4xl">Projects</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((project: IProject, i: number) => {
							return (
								<div key={i} className="p-3">
									<Project key={i} link={project.link} title={project.title} description={project.description} techStack={project.techStack} />
								</div>
							);
						})}
					</div>
				</section>

				<section id="contact" className="loading-animation container p-10 mx-auto">
					<h1 className="mb-4 text-4xl">Contact</h1>
					<p className="mb-8">Get in touch.</p>

					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="flex pr-0 md:pr-6 mb-6 md:mb-0">
							<form className="space-y-8" target="_blank" action="https://formsubmit.co/denizburduroglu@gmail.com" method="POST">
								<input type="text" name="name" className="input-text" placeholder="Name" required />
								<input type="email" name="email" className="input-text" placeholder="Email Address" required />
								<textarea data-max="20" placeholder="Message" className="input-text" name="message" required></textarea>
								<button type="submit" className="default-btn">
									Submit Form
								</button>
							</form>
						</div>
						<div className="border-black md:border-l-2 md:pl-6">
							<h1 className="mb-4 text-2xl">Deniz Burduroglu</h1>
							<p className="mb-8">Full-Stack Developer</p>
							<div className="flex flex-col md:flex-row mb-4 md:mb-2">
								<p className="w-28">RESIDENCE:</p>
								<p>Oakland, CA</p>
							</div>
							<div className="flex flex-col md:flex-row">
								<p className="w-28">E-MAIL:</p>
								<p>denizburduroglu@gmail.com</p>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}

export default App;
