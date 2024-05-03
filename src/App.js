// main page view
import About from './assets/components/About'
import Experience from './assets/components/Experience'
import Home from './assets/components/Home'
import NavBar from './assets/components/NavBar'
import Portfolio from './assets/components/Portfolio'
import SocialLinks from './assets/components/SocialLinks'
import Contact from './assets/components/contact'
import './index.css'

export default function App()
{
  return <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
         </div>
}
