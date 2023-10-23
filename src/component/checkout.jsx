import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './body.css';
import axios from 'axios';

const Checkout = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nomorMeja: '',
    infoTambahan: '',
    selectedOptions: new Array(8).fill(''),
  });

  const [orderStatus, setOrderStatus] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  useEffect(() => {
    if (shouldFetchData) {
      fetchData();
    }
  }, [shouldFetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        'https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu'
      );
      setMenuData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const sendFormData = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        nama: formData.nama,
        nomorMeja: formData.nomorMeja,
        infoTambahan: formData.infoTambahan,
        selectedOptions: formData.selectedOptions,
      };

      setShouldFetchData(true);

      const response = await axios.post(
        'https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu',
        dataToSend
      );

      alert('Pesanan berhasil terkirim, silahkan lihat nota di halaman Recipe');
      setOrderStatus('Pesanan berhasil terkirim, silahkan lihat nota di halaman Recipe');
    } catch (error) {
      console.error('Error:', error);

      alert('Terjadi kesalahan saat mengirim pesanan');
      setOrderStatus('Terjadi kesalahan saat mengirim pesanan');
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name.startsWith('dropdown-')) {
      const optionIndex = parseInt(e.target.name.split('-')[1]) - 7;
      const selectedOption = e.target.value;

      setFormData((prevFormData) => {
        const updatedSelectedOptions = [...prevFormData.selectedOptions];
        updatedSelectedOptions[optionIndex] = selectedOption;
        return {
          ...prevFormData,
          selectedOptions: updatedSelectedOptions,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const headerStyle = {
    backgroundColor: '#2B7A78',
  };

  const textStyle = {
    color: '#ffffff',
  };

  const formGroupStyle = {
    marginBottom: '10px',
  };

  const formatPriceToRibu = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  const dropdownOptions = [
    // Daftar pilihan Anda ...
  ];

  return (
    <div>
      <Navbar expand="lg" style={headerStyle}>
        <Container>
          <Navbar.Brand style={textStyle}>Drin-King</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link" style={textStyle}>
                Home
              </Link>
              <Link to="/menu" className="nav-link" style={textStyle}>
                Menu
              </Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown" style={{ color: 'white' }}>
                <NavDropdown.Item href="checkout">Checkout</NavDropdown.Item>
                <NavDropdown.Item href="recipe">Recipe</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="body2">
        <br />
        <br />
        <div className="order-form-container">
          <h1 style={{ color: '#2B7A78' }}>Form Pemesanan</h1>
          <form onSubmit={sendFormData}>
            <div className="form-row">
              <div className="form-group" style={formGroupStyle}>
                <label htmlFor="nama">Nama:</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group" style={formGroupStyle}>
                <label htmlFor="nomorMeja">Nomor Meja:</label>
                <input
                  type="text"
                  id="nomorMeja"
                  name="nomorMeja"
                  value={formData.nomorMeja}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="select-container">
              <div className="dropdown-column">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="dropdown-item">
                    <h6>{index % 2 === 0 ? 'Caffe' : 'Freshness'}</h6>
                    <select
                      name={`dropdown-${index + 7}`}
                      onChange={handleInputChange}
                      value={formData.selectedOptions[index] || ''}
                    >
                      <option value="">Pilih salah satu</option>
                      {dropdownOptions[index % 2].map((option, optionIndex) => (
                        <option key={optionIndex} value={`${option.label} - Rp ${option.price}`}>
                          {option.label} - Rp {formatPriceToRibu(option.price)}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group" style={formGroupStyle}>
              <label htmlFor="info-tambahan">Info Tambahan:</label>
              <textarea
                id="info-tambahan"
                name="infoTambahan"
                value={formData.infoTambahan}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit">Kirim Pesanan</button>
            <Link to="/recipe" style={{ marginLeft: '100px' }}>
              <button type="submit">Lihat Nota</button>
            </Link>
            <br />
            <br />
          </form>
        </div>
        <br />
      </div>


      <footer id="more" className="bg-dark text-white py-4">
        <Container>
          <div className="row">
            <div className="col-md-4">
              <h2 className="title-3" style={{ fontFamily: 'Garamond, serif' }}>Drin-King</h2>
              <p>
                This is a website that I created. I named this website DRIN-KING after the name of the creator. This website is under development. If you have questions, etc., you can contact the contact listed or the social media listed.
              </p>
              <a href="#contact-us">
                <Button variant="dark" className="btn-lg">
                  Contact us
                </Button>
              </a>
            </div>
            <div className="col-md-4">
              <h6 className="title-3" style={{ fontFamily: 'Garamond, serif' }}>Social Media</h6>
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
            <div className="col-md-4">
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
        </Container>
        
        <div className="text-center py-3">
          &copy; 2023 Devita Nela Aprilia - Capek mas wkwk
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
