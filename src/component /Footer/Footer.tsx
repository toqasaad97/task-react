import React from 'react';
import './footer.css'; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#2C3E50] p-20">
        <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center text-white">
          <div>
            <h4 className="title-footer pb-3">LOCATION</h4>
            <p className="pt-1 pb-4">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h4 className="title-footer">AROUND THE WEB</h4>
            <div className="flex justify-center items-center gap-3 pt-3">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faFacebook} size="xl" className="mx-2" />
              </div>
              <div className="footer-icon">
                <FontAwesomeIcon icon={faTwitter} size="xl" className="mx-2" />
              </div>
              <div className="footer-icon">
                <FontAwesomeIcon icon={faLinkedin} size="xl" className="mx-2" />
              </div>
              <div className="footer-icon">
                <FontAwesomeIcon icon={faGlobe} size="xl" className="mx-2" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="title-footer pb-3">ABOUT FREELANCER</h4>
            <p>Freelance is a free-to-use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="text-center py-6 bg-[#1b242b] text-white">
        Copyright © Your Website 2021
      </div>
    </footer>
  );
};

export default Footer;
