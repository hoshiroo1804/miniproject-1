import React from "react";
import { Navbar, Container, Nav, Card, Row, Col, NavDropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './body.css';
import {icon1} from "../assets/"; 
import {icon3} from "../assets/";
import {fresh2} from "../assets/";
import {fresh3} from "../assets/";
import {fresh4} from "../assets/";
import {fresh5} from "../assets/";
import {caffe10} from "../assets/";
import {caffe11} from "../assets/";

const Landing = () => {
  const headerStyle = {
    backgroundColor: "#2B7A78"
  };

  const textStyle = {
    color: "#ffffff"
  };

  return (
    <div>
      <Navbar expand="lg" style={headerStyle}>
        <Container>
          <Navbar.Brand style={textStyle}>Drin-King</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link" style={textStyle}>Home</Link>
              <Link to="/menu" className="nav-link" style={textStyle}>Menu</Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown" style={{ color: 'white' }}>
                <NavDropdown.Item href="checkout">Checkout</NavDropdown.Item>
                <NavDropdown.Item href="recipe">Recipe</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="body">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h1 style={{ fontFamily: "Garamond, serif", color: "white" }}>Welcome!</h1>
            <p style={{ fontFamily: "Times New Roman, serif", color: "white" }}>
              "Hello dear!, Selamat datang di Drink-King Shop, tempat terbaik untuk menemukan berbagai minuman segar dan pilihan terbaik yang cocok untuk setiap selera. Nikmati rasa lezat dari minuman kami dan temukan pengalaman rasa yang tak terlupakan."
            </p>
            <Link to="/menu">
              <Button variant="outline-light">Go To Menu</Button>{' '}
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
              src= {icon3}
              alt="Static Image"
              style={{ maxWidth: "400px", maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
  <Carousel>
    <Carousel.Item>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={caffe11} style={{ width: '100%' }} />
            <Card.Body>
                    <Card.Title><span style={{ color: "#2B7A78" }}>Ice Americano</span></Card.Title><br />
                    <Card.Text>
                      <span style={{ color: "#2B7A78" }}>Ice Americano dikenal dengan ciri khasnya yang memiliki rasa kopi yang kuat dan segar, tanpa tambahan susu atau gula. Minuman ini cocok bagi pecinta kopi yang menyukai rasa kopi yang murni dan ringan, dengan sentuhan penyegaran dari es.</span>
                      <br /><br />
                      <span style={{ color: "red" }}>Harga: Rp.20.000</span>
                    </Card.Text>
                  </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src= {fresh2} style={{ width: '100%' }} />
            <Card.Body>
                    <Card.Title><span style={{ color: "#2B7A78" }}>Matcha Oreo</span></Card.Title>
                    <Card.Text>
                      <span style={{ color: "#2B7A78" }}>Minuman Matcha Oreo populer di kalangan pecinta matcha dan pencinta Oreo yang menginginkan pengalaman yang memadukan kedua cita rasa ini menjadi satu.</span>
                      <br /><br />
                      <span style={{ color: "red" }}>Rp.15.000</span>
                    </Card.Text>
                  </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={caffe10} style={{ width: '100%' }} />
            <Card.Body>
                    <Card.Title><span style={{ color: "#2B7A78" }}>Coffe Latte</span></Card.Title><br />
                    <Card.Text>
                      <span style={{ color: "#2B7A78" }}>Coffe Latte adalah minuman kopi yang lezat dan lembut, terbuat dari kopi espresso yang dicampur dengan susu steamed.</span>
                      <br /><br />
                      <span style={{ color: "red" }}>Rp.20.000</span>
                    </Card.Text>
                  </Card.Body>
          </Card>
        </Col>
      </Row>
    </Carousel.Item>
    <Carousel.Item>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={fresh3} style={{ width: '100%' }} />
            <Card.Body>
                    <Card.Title><span style={{ color: "#2B7A78" }}>Grape Squash</span></Card.Title>
                    <Card.Text><span style={{ color: "#2B7A78" }}>Grape squash memiliki rasa alami buah anggur yang khas, dengan sentuhan manis yang lezat. Ini adalah pilihan yang sempurna untuk melepas dahaga dan menikmati rasa segar buah anggur kapan saja.</span>
                      <br /><br />
                      <span style={{ color: "red" }}>Rp.17.000</span>
                    </Card.Text>
                  </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={fresh4} style={{ width: '100%' }} />
            <Card.Body>
                    <Card.Title><span style={{ color: "#2B7A78" }}>Cream Blue</span></Card.Title>
                    <Card.Text><span style={{ color: "#2B7A78" }}>Cream blue adalah pilihan yang populer di kalangan pecinta makanan dan minuman yang mencari sesuatu yang istimewa dan berbeda.</span>
                      <br /><br />
                      <span style={{ color: "red" }}>Rp.20.000</span>
                    </Card.Text>
                  </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={fresh5} style={{ width: '100%' }} />
            <Card.Body>
                    <Card.Title><span style={{ color: "#2B7A78" }}>Placeholder Title</span></Card.Title>
                    <Card.Text>
                      <span style={{ color: "#2B7A78" }}>Minuman ini memiliki rasa manis dan segar dari anggur, dengan kelembutan dan kekentalan dari yogurt atau susu.</span>
                      <br /><br />
                      <span style={{ color: "red" }}>Rp.18.000</span>
                    </Card.Text>
                  </Card.Body>
          </Card>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
</div>


      <div className="body2"><br />
        <h1 style={{ fontFamily: "Garamond, serif", color: "#2B7A78" }}>Our Story !</h1><br />
        <img
          src={icon1}
          alt="Foto Pemilik"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h6 style={{ fontFamily: "Times New Roman, serif", textAlign: "center" }}><br />
          "Ini adalah kisah kami di Drin-King yang dimulai dengan semangat untuk menciptakan<br />
          minuman terbaik, disesuaikan untuk memenuhi selera unik pelanggan kami.<br />
          Selama bertahun-tahun, kami telah mencampurkan bahan terbaik dan teknik inovatif untuk<br />
          membuat menu yang menawarkan pengalaman yang menyegarkan seperti yang lainnya.<br />
          Kami bangga melayani Anda dengan beragam minuman yang akan memikat lidah Anda<br />
          dan membuat Anda selalu ingin kembali. Temukan perjalanan di balik setiap gelas dan<br />
          biarkan lidah Anda memulai petualangan yang tak terlupakan bersama kami."
        </h6><br />
      </div>

      {/* Footer Section */}
      <footer id="more">
        <div className="container">
          <div className="row text-center mb-3"></div>
          <div className="row text-md-start mt-5 text-center">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <h2 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Drin-King</h2>
              <p>
                This is a website that I created. I named this website DRIN-KING after the name of the creator. This website is under development. If you have questions, etc., you can contact the contact listed or the social media listed.
              </p>
              <a href="#contact-us">
                <button type="button" className="btn btn-dark btn-lg">
                  Contact us
                </button>
              </a>
            </div>

            <div className="col-md-4 col-lg-4 col-xl-3">
              <h6 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Social Media</h6>
              <a className="btn btn-light btn-link btn-floating btn-lg text-primary m-1" href="https://www.facebook.com/devita.nelaaprilia" target="_blank" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-light btn-link btn-floating btn-lg text-info m-1" href="https://x.com/DevitaNelaapri1?t=CQqCtwaSFyE8PnoIm0RKDw&s=09" target="_blank" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-light btn-link btn-floating btn-lg text-danger m-1" href="https://instagram.com/dnelaapr_?igshid=NzZlODBkYWE4Ng==" target="_blank" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-5">
              <h6 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Our Address</h6>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>Jl. Ringin Raya No.22, Ngringin, Condongcatur, Kec. Depok,</h5>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>JlKabupaten Sleman, Daerah Istimewa Yogyakarta 55283,</h5>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}> Indonesia</h5>
              <br />
              <br />
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}> <b>Phone:</b> +62 812 2322 2680</h5>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>  <b>Email:</b> dnelapri@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className="sikil">
          <p className="text">
            &copy; 2023 Devita Nela Aprilia - Capek mas wkwk
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
