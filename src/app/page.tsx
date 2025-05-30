import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay"></div>
      
      <div className="home-content">
        <h1>ADRIANO ALBERT MUNIZ</h1>
        <div className="subtitle">Computer Networking and More</div>
        <nav className="main-nav">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/publications">Publications</Link>
        </nav>
      </div>

      <div className="social-icons">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <SiX style={{ width: 100, height: 100, color: '#fff' }} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub style={{ width: 100, height: 100, color: '#fff' }} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin style={{ width: 100, height: 100, color: '#fff' }} />
        </a>
      </div>
    </div>
  );
}
