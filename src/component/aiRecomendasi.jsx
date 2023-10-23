import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
import {caffe1} from "../assets/";
import {caffe2} from "../assets/";
import {caffe3} from "../assets/";
import {caffe4} from "../assets/";
import {caffe5} from "../assets/";
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

class DrinkRecommendationAI extends Component {
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
    
  handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const recommendedDrinks = this.state.menu.filter(drink =>
      drink.nama.toLowerCase().includes(keyword)
    );
    this.setState({ userKeyword: keyword, recommendedDrinks });
  };

  render() {
    const headerStyle = {
      backgroundColor: '#2B7A78',
      color: 'white',
    };

    return (
      <div>
        <Navbar expand="lg" style={headerStyle}>
          <Container>
            <Navbar.Brand style={{ color: 'white', fontSize: '16px' }}>Drin-King</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
                <Link to="/menu" className="nav-link" style={{ color: 'white' }}>Menu</Link>
                <NavDropdown title="Shop" id="basic-nav-dropdown" style={{ color: 'white' }}>
                  <NavDropdown.Item href="checkout">Checkout</NavDropdown.Item>
                  <NavDropdown.Item href="recipe">Recipe</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <h1>Rekomendasi Minuman Berdasarkan Preferensi Anda</h1>
        <input
          type="text"
          placeholder="Cari minuman..."
          value={this.state.userKeyword}
          onChange={this.handleSearch}
        />
        <h2>Minuman yang Direkomendasikan:</h2>
        <ul>
          {this.state.userKeyword && this.state.recommendedDrinks.length > 0 ? (
            this.state.recommendedDrinks.map(drink => (
              <li key={drink.id}>
                <img src={drink.gambar} alt={drink.nama} />
                <p>{drink.nama}</p>
                <p>{drink.harga}</p>
              </li>
            ))
          ) : (
            <p>Tidak ada minuman yang direkomendasikan.</p>
          )}
        </ul>

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
                <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283, Indonesia</h5>
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
}

export default DrinkRecommendationAI;
