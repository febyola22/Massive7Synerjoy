import React from 'react';
import logoImage from '../assets/Logo-WaveWounderland.png';
import { MdOutlineMail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer section-padding">
        <img src={logoImage} alt="" width="110px" height="100px" />
        <div className="sb-footer-links">
          <p>Tumbuhlah seperti ombak yang besar, mencintai laut kita dan melindungi habitatnya. Hanya dengan itu, kita akan meraih kekayaan yang sesungguhnya</p>
        </div>
        <hr className=""></hr>

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>&copy; Copyright Synerjoy 2024. All right reserved</p>
          </div>
          <div className="sb-footer-links-div">
            <div>
              <MdOutlineMail className="icons" />
            </div>
            <div>
              <BsTwitterX className="icons" />
            </div>
            <div>
              <FaInstagram className="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
