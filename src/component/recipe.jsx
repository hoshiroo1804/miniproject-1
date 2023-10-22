import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './body.css';

const Recipe = () => {
  const [latestOrder, setLatestOrder] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //section useEffect
  useEffect(() => {
    async function fetchLatestOrder() {
      try {
        const response = await axios.get('https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu');
        if (response.data.length > 0) {
          const newestOrder = response.data[response.data.length - 1];
          setLatestOrder(newestOrder);
        }
      } catch (error) {
        console.error('Error fetching latest order:', error);
      }
    }

    fetchLatestOrder();
  }, []);


  //section style

  const containerStyle = {
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '60%',
    overflowX: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#f9f9f9',
  };

  const labelStyle = {
    fontWeight: 'bold',
    minWidth: '100px',
    display: 'inline-block',
    paddingRight: '10px',
    textAlign: 'left',
  };

  const headerStyle = {
    backgroundColor: '#2B7A78',
  };

  const headerContainerStyle = {
    marginBottom: '20px',
  };

  const textStyle = {
    color: '#ffffff',
  };

  //section function
  const dropdownOptions = [
    [
      { label: 'Caffe Latte', price: 25000 },
      { label: 'Dalgona Coffee', price: 20000 },
      { label: 'Cream Latte', price: 20000 },
      { label: 'Cream Puff', price: 25000 },
      { label: 'Option 7 Name', price: 15000 },
      { label: 'Option 8 Name', price: 15000 },
      { label: 'Option 9 Name', price: 15000 },
      { label: 'Option 10 Name', price: 20000 },
      { label: 'Dolce Latte', price: 18000 },
      { label: 'Milk Coffee', price: 20000 },
      { label: 'Ice Coffee', price: 20000 },
      { label: 'Milky Latte', price: 20000 },
      { label: 'Art Latte', price: 25000 },
      { label: 'Ice Cream Americano', price: 20000 },
    ],
    [
      { label: 'Grape Smoothies', price: 20000 },
      { label: 'Strawberry Smoothies', price: 25000 },
      { label: 'Apple Juice', price: 15000 },
      { label: 'Matcha Cream', price: 25000 },
      { label: 'Berry Squash', price: 18000 },
      { label: 'Kiwi Squash', price: 15000 },
      { label: 'Lemon Squash', price: 15000 },
      { label: 'Squash Berry Mix', price: 18000 },
      { label: 'Matcha Berry', price: 20000 },
      { label: 'Aren Matcha', price: 25000 },
      { label: 'Peach Squash', price: 20000 },
      { label: 'Kiwi Lemon Squash', price: 15000 },
      { label: 'Kiwi Orange Cream', price: 20000 },
      { label: 'Mix Squash', price: 18000 },
      { label: 'Sea Squash', price: 20000 },
      { label: 'Lemon Berry Fun', price: 15000 },
      { label: 'Orange Juice', price: 12000 },
      { label: 'Orange Blood', price: 20000 },
    ],
  ];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu/${latestOrder.id}`, latestOrder);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu/${latestOrder.id}`);
      const response = await axios.get('https://65321c734d4c2e3f333d9e99.mockapi.io/minpro/datamenu');
      if (response.data.length > 0) {
        const newestOrder = response.data[response.data.length - 1];
        setLatestOrder(newestOrder);
      } else {
        setLatestOrder(null);
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const calculateTotalPrice = () => {
    if (latestOrder) {
      const selectedOptions = latestOrder.selectedOptions;
      const totalPrice = selectedOptions.reduce((total, option) => {
        const priceMatch = option.match(/Rp\s([\d.,]+)/);
        if (priceMatch) {
          const priceString = priceMatch[1].replace(/[.,]/g, '');
          const price = parseFloat(priceString.replace(',', '.'));
          return total + price;
        }
        return total;
      }, 0);

      return `Rp ${totalPrice.toLocaleString('id-ID')}`;
    }
    return 'Rp 0';
  };

  const handleBayarQR = () => {
    const qrCodeImageUrl = '/gambar/icon/kodeQR.jpeg';
    alertWithImage(qrCodeImageUrl);
  };

  const alertWithImage = (imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
    img.style.maxWidth = '10%';
    img.style.height = 'auto';

    const alertContent = document.createElement('div');
    alertContent.appendChild(img);

//section alert
    alert({
      content: alertContent,
      confirmButtonColor: '#007BFF',
    });
  };


  //section render seluruh halaman
  return (
    <div>
      <Navbar expand="lg" style={headerStyle} id="header">
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
      
{/*section body*/}
      <div className='body2'>
        <Container style={containerStyle} id="container1">
          <div style={headerContainerStyle}>
            <h1 style={{ color: '#2B7A78' }}>Data Pesanan Drin-King</h1>
          </div>
          {latestOrder ? (
            <div>
              <div style={{ margin: '10px 0' }}>
                <span style={labelStyle} className="label">
                  ID:
                </span>{' '}
                {latestOrder.id}
              </div>
              <div style={{ margin: '10px 0' }}>
                <span style={labelStyle} className="label">
                  Nama:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={latestOrder.nama}
                    onChange={(e) => setLatestOrder({ ...latestOrder, nama: e.target.value })}
                  />
                ) : (
                  latestOrder.nama
                )}
              </div>
              <div style={{ margin: '10px 0' }}>
                <span style={labelStyle} className="label">
                  Nomor Meja:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={latestOrder.nomorMeja}
                    onChange={(e) => setLatestOrder({ ...latestOrder, nomorMeja: e.target.value })}
                  />
                ) : (
                  latestOrder.nomorMeja
                )}
              </div>
              <div style={{ margin: '10px 0' }}>
                <span style={labelStyle} className="label">
                  Info Tambahan:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={latestOrder.infoTambahan}
                    onChange={(e) => setLatestOrder({ ...latestOrder, infoTambahan: e.target.value })}
                  />
                ) : (
                  latestOrder.infoTambahan
                )}
              </div>
              {latestOrder.selectedOptions.map((option, index) => (
                <div key={index} className="menu" style={{ margin: '10px 0' }}>
                  <span style={labelStyle} className="label">
                    Menu {index + 1}:
                  </span>
                  {isEditing ? (
                    <select
                      value={option}
                      onChange={(e) =>
                        setLatestOrder({
                          ...latestOrder,
                          selectedOptions: latestOrder.selectedOptions.map((oldOption, i) =>
                            i === index ? e.target.value : oldOption
                          ),
                        })
                      }
                    >
                      <option value="">Pilih opsi</option>
                      {dropdownOptions.map((dropdown, dropdownIndex) => (
                        <optgroup key={dropdownIndex} label={dropdownIndex % 2 === 0 ? 'Caffe' : 'Freshness'}>
                          {dropdown.map((item, itemIndex) => (
                            <option key={itemIndex} value={`${item.label} - Rp ${item.price}`}>
                              {item.label} - Rp {item.price}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  ) : (
                    option
                  )}
                </div>
              ))}

              <div id="total-price" style={{ margin: '20px 50px 20px 0', float: 'right', color: 'red' }}>
                <span style={{ ...labelStyle, fontSize: '20px' }} className="label">
                  Total Harga:
                </span>{' '}
                {calculateTotalPrice()}
                <h6>Jika tidak menggunakan QR, <br>
                </br>silahkan pergi ke kasir untuk membayar</h6>
              </div><br></br><br></br><br></br>
                    
          {/*section button*/}
              <div id="button-container" style={{ margin: '10px 0' }}>
                {isEditing ? (
                  <Button variant="success" className="button" onClick={handleSaveEdit}>
                    Simpan
                  </Button>
                ) : (
                  <Button variant="info" className="button" onClick={handleEdit}>
                    Edit
                  </Button>
                )}
                <Button variant="danger" className="button" onClick={handleDelete}>
                  Hapus
                </Button>
                <Button variant="primary" className="button" onClick={handleBayarQR}>
                  Bayar dengan QR
                </Button>
                {isEditing && (
                  <Button variant="danger" className="button" onClick={handleCancelEdit}>
                    Batal
                  </Button>
                )}

              </div>
            </div>
          ) : (
            <p>Tidak ada pesanan terbaru.</p>
          )}
        </Container>
      </div>

      {/* section footer */}
      <footer id="more">
        <div className="container">
          <div className="row text-center mb-3"></div>
          <div className="row text-md-start mt-5 text-center">
            <div className="fot-1 col-md-4 col-lg-4 col-xl-4">
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

            <div className="fot-2 col-md-4 col-lg-4 col-xl-3">
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
            <div className="fot-3 col-md-4 col-lg-4 col-xl-5">
              <h6 className="title-3" style={{ fontFamily: "Garamond, serif" }}>Our Address</h6>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>Jl. Ringin Raya No.22, Ngringin, Condongcatur, Kec. Depok,</h5>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>JlKabupaten Sleman, Daerah Istimewa Yogyakarta 55283,</h5>
              <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>Indonesia</h5>
              <br />
              <br />
              <h5>
                <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}> <b>Phone:</b> +62 812 2322 2680</h5>
              </h5>
              <h5>
                <h5 style={{ fontFamily: "Times New Roman, serif", color: "white" }}>  <b>Email:</b> dnelapri@gmail.com</h5>
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

export default Recipe;
