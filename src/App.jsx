import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/gsap-core";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);
import './App.css'

const App = () => {

  useGSAP(() => {
    document.body.addEventListener("mousemove", evt => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      })

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      })
    });
    var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
    tl.to("#scramble", { duration: 3, scrambleText: { text: "Full Stack Web Developer", chars: "lowerCase", revealDelay: 0.5, tweenLength: false } })
      .to("#scrambleMore", { duration: 4, scrambleText: { text: "Software Developer", revealDelay: 1, tweenLength: false, speed: 0.4 } })
  }, {});

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="cursor"></div>
          <div className="shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="content">
            <h1>Pradnya Hegde </h1>
            <h2 id="scramble"></h2>
            <h2 id="scrambleMore"></h2>
          </div>
        </div>
      </main >
    </div >
  )
}

export default App
