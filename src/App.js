import "./App.css";
import Navbar from "./components/Navbar";
import emailIcon from "./assets/icons/email_icon.svg";
function App() {
	return (
		<div>
			<Navbar />
	
			<section className="bg-gray-200">
				<h1>About</h1>
			</section>

			<section className="bg-gray-300">
				<h1>Experience</h1>
			</section>

			<section className="bg-gray-400">
				<h1>Projects</h1>
			</section>

			<section id="contact" className="h-screen w-screen container px-4 mx-auto">
        <div className="px-6">
          <h1 className="mb-4 text-4xl w-full">Contact</h1>
          <p className="mb-8">
            Get in touch.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="px-6">
            <form className="space-y-8" target="_blank" action="https://formsubmit.co/denizburduroglu@gmail.com" method="POST">
              <input type="text" name="name" className="border-black border-b-2 w-full p-y-2" placeholder="Name" required />
              <input type="email" name="email" className="border-black border-b-2 w-full p-y-2" placeholder="Email Address" required />
              <textarea placeholder="Message" className="border-black border-b-2 w-full p-y-2" name="message" rows="10" required></textarea>
              <button type="submit" className="default-button bg-red-700 p-2">
                Submit Form
              </button>
            </form>
          </div>
          <div className="border-black border-l-2 px-6">
            <h1 className="mb-4 text-2xl w-full">Deniz Burduroglu</h1>
            <p className="mb-8">
						  Full-Stack Developer
					  </p>
            <div className="grid grid-cols-2">
              <p className="mb-4">
                RESIDENCE:
              </p>
              <p>
                Oakland, CA
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="mb-4">
                E-MAIL:
              </p>
              <p>
                denizburduroglu@gmail.com
              </p>
            </div>
            <a
              href="https://github.com/denizburduroglu"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <img src={emailIcon} alt=""/>
            </a>
          </div>
        </div>
			</section>
		</div>
	);
}

export default App;
