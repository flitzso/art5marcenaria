import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/NavBar';
import logoWhiteArt5 from '../components/imgs/logo-white-art5.png'; // Importar a imagem corretamente

const Home = () => {
  return (
    <div>
      {/* Logo Art.5 Marcenaria*/}
      <div className="text-center my-4">
      <img src={logoWhiteArt5}></img>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
