import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className="top">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="youtube" />
            <img src="https://static.vecteezy.com/system/resources/previews/042/127/160/non_2x/instagram-logo-on-circle-style-with-transparent-background-free-png.png" alt="Instagram" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" />
        </div>
        <div className="bottom">
            <ul className='container'>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li>Service Code</li>
                <li>© 1997-2025 Netflix, Inc.</li>
            </ul>

            <ul className='container'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            </ul>

            <ul className='container'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            </ul>

            <ul className='container'>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            </ul>
            </div>
      </footer>
    </>
  )
}

export default Footer
