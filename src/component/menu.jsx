import React, { Component } from 'react';
import { Navbar, Container, Nav, Card, Row, Col, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './body.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import openai from 'openai';
import {fresh5} from "../assets/";
import {fresh6} from "../assets/";
import {fresh7} from "../assets/";
import {fresh8} from "../assets/";
import {fresh9} from "../assets/";
import {fresh10} from "../assets/";
import {fresh11} from "../assets/";
import {fresh12} from "../assets/";
import {fresh13} from "../assets/";
import {fresh14} from "../assets/";
import {fresh15} from "../assets/";
import {fresh16} from "../assets/";
import {fresh17} from "../assets/";
import {fresh18} from "../assets/";
import {fresh19} from "../assets/";
import {fresh20} from "../assets/";
import {fresh21} from "../assets/";
import {fresh22} from "../assets/";
import {caffe6} from "../assets/"; 
import {caffe7} from "../assets/"; 
import {caffe8} from "../assets/"; 
import {caffe9} from "../assets/"; 
import {caffe10} from "../assets/"; 
import {caffe11} from "../assets/"; 
import {caffe12} from "../assets/"; 
import {caffe13} from "../assets/"; 
import {caffe14} from "../assets/"; 
import {caffe15} from "../assets/"; 
import {caffe16} from "../assets/"; 
import {caffe17} from "../assets/";
import {caffe18} from "../assets/";
import {caffe19} from "../assets/";
import {caffe20} from "../assets/";
import {caffe21} from "../assets/";
import {caffe22} from "../assets/";

class MenuMinuman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { id: 1, nama: 'Grape Smothies', harga: 'Rp 20.000', gambar:fresh5,},
        { id: 2, nama: 'Strawberry Milkshake', harga: 'Rp 25.000', gambar: fresh6 },
        { id: 3, nama: 'Apple Juice', harga: 'Rp 15.000', gambar: fresh7 },
        { id: 4, nama: 'Matcha Creame', harga: 'Rp 25.000', gambar: fresh8 },
        { id: 5, nama: 'Berry Squash', harga: 'Rp 18.000', gambar: fresh9 },
        { id: 6, nama: 'Kiwi Squash', harga: 'Rp 15.000', gambar: fresh10 },
        { id: 7, nama: 'Lemon Squash', harga: 'Rp 15.000', gambar: fresh11 },
        { id: 8, nama: 'Squash Berry Mix', harga: 'Rp 18.000', gambar: fresh12 },
        { id: 9, nama: 'Matcha Berry', harga: 'Rp 20.000', gambar: fresh13},
        { id: 10, nama: 'Aren Matcha', harga: 'Rp 25.000', gambar: fresh14 },
        { id: 11, nama: 'Peach Squash', harga: 'Rp 20.000', gambar: fresh15 },
        { id: 12, nama: 'Kiwi Lemon Squash', harga: 'Rp 15.000', gambar: fresh16 },
        { id: 13, nama: 'Kiwi Orange Creame', harga: 'Rp 20.000', gambar: fresh17 },
        { id: 14, nama: 'Mix Squash', harga: 'Rp 18.000', gambar: fresh18 },
        { id: 15, nama: 'Sea Squash', harga: 'Rp 20.000', gambar: fresh19 },
        { id: 16, nama: 'Lemon Berry Fun', harga: 'Rp 15.000', gambar: fresh20 },
        { id: 17, nama: 'Orange Juice', harga: 'Rp 12.000', gambar: fresh21 },
        { id: 18, nama: 'Orange Blood', harga: 'Rp 20.000', gambar: fresh22 },
        { id: 19, nama: 'Orange', harga: 'Rp 15.000', gambar: fresh20 },
        { id: 20, nama: 'Caffe Latte', harga: 'Rp 25.000', gambar: caffe7 },
        { id: 21, nama: 'Dalgonna Coffee', harga: 'Rp 20.000', gambar: caffe8},
        { id: 22, nama: 'Creame Latte', harga: 'Rp 20.000', gambar: caffe9 },
        { id: 23, nama: 'Cream Puff', harga: 'Rp 25.000', gambar: caffe10 },
        { id: 24, nama: 'Americano', harga: 'Rp 105.000', gambar: caffe11 },
        { id: 25, nama: 'Espresso', harga: 'Rp 15.000', gambar: caffe12 },
        { id: 26, nama: 'Latte', harga: 'Rp 15.000', gambar: caffe13 },
        { id: 27, nama: 'Ice Cream Coffe', harga: 'Rp 20.000', gambar: caffe14 },
        { id: 28, nama: 'Cappucino', harga: 'Rp 15.000', gambar: caffe15 },
        { id: 29, nama: 'Dolce Latte', harga: 'Rp 18.000', gambar: caffe16 },
        { id: 30, nama: 'Coffe', harga: 'Rp 10.000', gambar: caffe17 },
        { id: 31, nama: 'Chocho Latte', harga: 'Rp 15.000', gambar: caffe18 },
        { id: 32, nama: 'Milk Coffe', harga: 'Rp 20.000', gambar: caffe19 },
        { id: 33, nama: 'Ice Coffe', harga: 'Rp 20.000', gambar: caffe20 },
        { id: 34, nama: 'Milky Latte', harga: 'Rp 20.000', gambar: caffe21 },
        { id: 35, nama: 'Art Latte', harga: 'Rp 25.000', gambar: caffe22 },
        { id: 36, nama: 'Ice Creame Americano', harga: 'Rp 20.000', gambar: caffe6 },

      ],
      menu1: [
        { id: 1, nama: 'Cream Latte', harga: 'Rp 20.000', gambar: caffe6 },
        { id: 2, nama: 'Milk Latte', harga: 'Rp 18.000', gambar: caffe7 },
        { id: 3, nama: 'Dalgona Coffee', harga: 'Rp 20.000', gambar: caffe8 },
        { id: 4, nama: 'Chocolate Latte', harga: 'Rp 25.000', gambar: caffe9 },
        { id: 5, nama: 'Kopi Hitam', harga: 'Rp 8.000', gambar: caffe10 },
        { id: 6, nama: 'Jus Jeruk', harga: 'Rp 10.000', gambar: caffe11 },

      ],
        menu2: [
          { id: 4, nama: 'Grape Smothies', harga: 'Rp 20.000', gambar: fresh5 },
          { id: 5, nama: 'Strawberry Milkshake', harga: 'Rp 25.000', gambar: fresh6 },
          { id: 6, nama: 'Apple Juice', harga: 'Rp 15.000', gambar: fresh7 },
          { id: 7, nama: 'Matcha Creame', harga: 'Rp 25.000', gambar: fresh8 },
          { id: 8, nama: 'Berry Squash', harga: 'Rp 18.000', gambar: fresh9 },
          { id: 9, nama: 'Kiwi Squash', harga: 'Rp 15.000', gambar: fresh10 },
        ],
      };
    }

//section AI
  getRecommendations = async () => {
    try {
      const menuItems = this.state.menu.map(item => item.nama).join('\n');
      const prompt = `I need recommendations for our menu items:\n${menuItems}`;
      
      const gptResponse = await openai.Completion.create({
        engine: 'davinci',
        prompt,
        max_tokens: 100,
        n: 1,
      });
      
      const recommendations = gptResponse.choices[0].text;
      console.log(recommendations);

      // Anda bisa memperbarui state atau menggunakan rekomendasi sesuai kebutuhan.
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  render() {
    const headerStyle = {
      backgroundColor: "#2B7A78",
    };

    const textStyle = {
      color: "#ffffff",
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
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                  <NavDropdown.Item href="checkout">Checkout</NavDropdown.Item>
                  <NavDropdown.Item href="recipe">Recipe</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="body">
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/ai">
              <Button variant="outline-light" onClick={this.getRecommendations}>
                Get Menu Recommendations
              </Button>
            </Link>
            <Link to="/checkout">
              <Button variant="outline-light">Let's Go CheckOut</Button>
            </Link>
          </div>

          <h1 style={{ fontSize: '50px', fontFamily: "Garamond, serif", color: 'white', textAlign: 'center'}}>Coffe Variant</h1>
          <Carousel>
            {this.state.menu1.map((item, index) => (
              <Carousel.Item key={item.id}>
                <Container>
                  <div className="row">
                    {this.state.menu1.slice(index, index + 3).map((menuItem) => (
                      <div className="col-md-4" key={menuItem.id}>
                        <img src={menuItem.gambar} alt={menuItem.nama} className="menu-image" />
                        <h2 style={{ color: 'white' }}>{menuItem.nama}</h2>
                        <p className="menu-price">{menuItem.harga}</p>
                      </div>
                    ))}
                  </div>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="body">
          <br />
          <h1 style={{ fontSize: '50px', fontFamily: "Garamond, serif", color: 'white', textAlign: 'center'}}>Fresh Variant</h1>
          <Carousel>
            {this.state.menu2.map((item, index) => (
              <Carousel.Item key={item.id}>
                <Container>
                  <div className="row">
                    {this.state.menu2.slice(index, index + 3).map((menuItem) => (
                      <div className="col-md-4" key={menuItem.id}>
                        <img src={menuItem.gambar} alt={menuItem.nama} className="menu-image" />
                        <h2 style={{ color: 'white' }}>{menuItem.nama}</h2>
                        <p className="menu-price">{menuItem.harga}</p>
                      </div>
                    ))}
                  </div>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>


    {/*section body*/}
        <div className="body2">
          <br />
          <h1 style={{ fontSize: '50px', fontFamily: "Garamond, serif", color: '#2B7A78', textAlign: 'center' }}>Full Variant</h1>
          <br />
          <Container>
            <Row>
              {this.state.menu.map((item) => (
                <Col key={item.id} md={2} style={{ marginBottom: '20px' }}>
                  <Card>
                    <Card.Img variant="top" src={item.gambar} style={{ width: '100%' }} />
                    <Card.Body>
                      <Card.Title>
                        <span style={{ color: "#2B7A78" }}>{item.nama}</span>
                      </Card.Title>
                      <Card.Text>
                        {item.deskripsi}<br />
                        <span style={{ color: "#2B7A78" }}>Harga: {item.harga}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

      {/*section Footer*/}
        <footer id="more">
          <div className="container">
            <div className="row text-center mb-3"></div>
            <div className="row text-md-start mt-5 text-center">
              <div className="fot-1 col-md-4 col-lg-4 col-xl-4">
                <div className="fot-3 col-md-4 col-lg-4 col-xl-5">
                  <h2 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Drin-King</h2>
                </div>
                <p>
                  This is a website that I created. I named this website DRIN-KING after the name of the creator. This website is under development. If you have questions, etc., you can contact the contact listed or the social media listed.
                </p>
                <a href="#contact-us">
                  <button type="button" className="btn btn-dark btn-lg">
                    Contact us
                  </button>
                </a>
              </div>

              <div className="fot-2 col-md-4 col-lg-4 col-xl-3">
                <div className="fot-3 col-md-4 col-lg-4 col-xl-5">
                  <h6 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Social Media</h6>
                </div>
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
              <div className="fot-3 col-md-4 col-lg-4 col-xl-5">
                <h6 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Our Address</h6>
                <p style={{ fontFamily: "Times New Roman, serif", color: "white" }}>Jl. Ringin Raya No.22, Ngringin, Condongcatur, Kec. Depok,</p>
                <p style={{ fontFamily: "Times New Roman, serif", color: "white" }}>JlKabupaten Sleman, Daerah Istimewa Yogyakarta 55283,</p>
                <p style={{ fontFamily: "Times New Roman, serif", color: "white" }}> Indonesia</p>
                <br />
                <br />
                <h5>
                  <p style={{ fontFamily: "Times New Roman, serif", color: "white" }}> <b>Phone:</b> +62 812 2322 2680</p>
                  <p style={{ fontFamily: "Times New Roman, serif", color: "white" }}>  <b>Email:</b> dnelapri@gmail.com</p>
                </h5>
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
}

export default MenuMinuman;
