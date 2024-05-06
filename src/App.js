import logo from './company-logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'; 
import Card from 'react-bootstrap/Card';

function App() {
  return (
        <div id='main-body' className='main-body'>
      <Card>
        <Card.Header>Welcome to Firefly Castle Development</Card.Header>
        <Card.Subtitle>Delivering quality since 2024</Card.Subtitle>
        <Card.Img variant="top" src={logo} alt='Firefly Castle Development company logo' height='300px'/>
        <Card.Body>
          <Card.Text>
          We are a software consulting company specializing in cutting-edge solutions for businesses in the United Kingdom.
          </Card.Text>

          <div className="social-links">
            <a href="https://github.com/laura-lucciola" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="https://gitlab.com/laura-lucciola" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGitlab} /> GitLab
            </a>
            <a href="https://www.linkedin.com/in/laura-lucciola/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://dev.to/laura-lucciola" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDev} /> Dev.to
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
);  
}

export default App;
