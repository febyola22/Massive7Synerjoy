import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { FcGoogle } from 'react-icons/fc';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';
import '../style/signup.css';
import '../style/footer.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import logoImage from '../assets/Logo-WaveWounderland.png';

const SignUp = () => {
  return (
    <>
      <div className="Mybg">
        <main className="form-container py-4">
          <Form className="form-box w-30 py-lg-2">
            <h1 className="h3 mb-3 fw-normal py-lg-2">LOG IN</h1>
            <p className="p">Selamat Datang Kembali! Mohon masukkan informasi akun anda</p>
            <div className="form-name mb-3">
              <div className="form-field">
                <label for="exampleInputNamaDepan" class="form-label">
                  Nama Depan
                </label>
                <input type="text" className="form-control" id="exampleInputNamaDepan" placeholder="Nama Depan" />
              </div>
              <div className="form-field">
                <label for="exampleInputNamaBelakang" class="form-label">
                  Nama Belakang
                </label>
                <input type="text" className="form-control" id="exampleInputNamaBelakang" placeholder="Nama Belakang" />
              </div>
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="masukkan email anda" />
            </div>
            <div className="form-pass mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <div className="input-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="masukkan password anda" />
              </div>
              <span>
                <Icon icon={eyeOff} size={20} />
              </span>
            </div>
            <Button className="btn-log" bg="light" variant="light">
              Sign Up
            </Button>
            <p className="form-text-center">
              Belum memiliki akun? <Link to="/signin">SignIn</Link> Disini
            </p>

            <div className="position-relative">
              <hr className="text-secondary" />
              <div className="divider-contenct-center">Or</div>
            </div>

            <div className="icon-google">
              <FcGoogle className="icons" />
            </div>
          </Form>
        </main>

        <div className="footer">
          <div className="sb-footer section-padding">
            <img src={logoImage} alt="" width="140px" height="120px" />
            <div className="sb-footer-links">
              <p className="text">Tumbuhlah seperti ombak yang besar,</p>
              <p className="text">mencintai laut kita dan melindungi</p>
              <p className="text">habitatnya. Hanya dengan itu, kita akan</p>
              <p className="text">meraih kekayaan yang sesungguhnya</p>
            </div>
            <hr className=""></hr>

            <div className="sb-footer-below">
              <div className="sb-footer-copyright">
                <p>&copy; Copyright Synerjoy 2024. All right reserved</p>
              </div>
              <div className="sb-footer-links-div mx-7">
                <div>
                  <MdOutlineMail className="icons mx-1" />
                </div>
                <div>
                  <BsTwitterX className="icons mx-1" />
                </div>
                <div>
                  <FaInstagram className="icons mx-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SignUp;
