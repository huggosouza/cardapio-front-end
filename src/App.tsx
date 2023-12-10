import React, { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (

    <div className="container">
      <div className="App">
      </div>
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
      </div>
      {isModalOpen && <CreateModal />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
}

export default App;
