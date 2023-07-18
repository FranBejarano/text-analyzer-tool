import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import './index.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyser</span>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/francisco-jose-bejarano-escano-76240716/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
