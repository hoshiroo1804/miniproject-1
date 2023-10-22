import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Admin = () => {
  const [latestOrders, setLatestOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu');
        setLatestOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const headerStyle = {
    backgroundColor: '#2B7A78',
    color: '#ffffff',
  };

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu/${orderId}`);
      const updatedOrders = latestOrders.filter((order) => order.id !== orderId);
      setLatestOrders(updatedOrders);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div>
      <Navbar expand="lg" style={headerStyle}>
        <Container>
          <Navbar.Brand>Drin-King</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="checkout">Checkout</NavDropdown.Item>
                <NavDropdown.Item href="recipe">Recipe</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="body2">
        <h1>Data Pesanan Terbaru</h1>
        {latestOrders.length > 0 ? (
          <table className="table" style={{ backgroundColor: '#def2f1' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Nomor Meja</th>
                <th>Info Tambahan</th>
                <th>Menu 1</th>
                <th>Menu 2</th>
                <th>Menu 3</th>
                <th>Menu 4</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.nama}</td>
                  <td>{order.nomorMeja}</td>
                  <td>{order.infoTambahan}</td>
                  <td>{order.selectedOptions[0]}</td>
                  <td>{order.selectedOptions[1]}</td>
                  <td>{order.selectedOptions[2]}</td>
                  <td>{order.selectedOptions[3]}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(order.id)}>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Tidak ada pesanan terbaru.</p>
        )}
      </div>

      <footer id="more">
        <div className="container">
          <div className="row text-center mb-3"></div>
          <div className="row text-md-start mt-5 text-center">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="fot-3">
                <h2 className="title-3" style={{ fontFamily: 'Garamond, serif' }}>Drin-King</h2>
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

            <div className="col-md-4 col-lg-4 col-xl-3">
              <div className="fot-3">
                <h6 className="title-3" style={{ fontFamily: 'Garamond, serif' }}>Social Media</h6>
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

            <div className="col-md-4 col-lg-4 col-xl-5">
              <h6 className="title-3" style={{ fontFamily: 'Garamond, serif' }}>Our Address</h6>
              <h5 style={{ fontFamily: 'Times New Roman, serif', color: 'white' }}>Jl. Ringin Raya No.22, Ngringin, Condongcatur, Kec. Depok,</h5>
              <h5 style={{ fontFamily: 'Times New Roman, serif', color: 'white' }}>Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283,</h5>
              <h5 style={{ fontFamily: 'Times New Roman, serif', color: 'white' }}>Indonesia</h5>
              <br />
              <br />
              <h5>
                <b>Phone:</b> +62 812 2322 2680
              </h5>
              <h5>
                <b>Email:</b> dnelapri@gmail.com
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
};

export default Admin;
