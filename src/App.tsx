import React, { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textoBotaoNovo, setTextoBotaoNovo] = useState('Novo');
  const [hideBtnClass, setHideBtnClass] = useState('btn-Novo');

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
    setTextoBotaoNovo(prevTexto => prevTexto === 'Novo' ? 'Esconder' : 'Novo');
    setHideBtnClass(prevClass => prevClass === 'btn-Novo' ? 'btn-Hide' : 'btn-Novo');
  };

  return (

    <div className="container">
      <div className="App">
      </div>
      {isModalOpen && <CreateModal />}
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => (
          <Card
            key={foodData.id} // Add a unique key for each card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
        <ToastContainer />
      </div>
      <button className={hideBtnClass} onClick={handleOpenModal}>{textoBotaoNovo}</button>
    </div>
  );
}

export default App;
