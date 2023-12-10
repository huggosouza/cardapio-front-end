import { useState } from "react";
import { useFoodDataMutate } from "../../../hooks/userFoodDataMutate";
import { FoodData } from "../../../interface/FoodData";
import './modal-overlay.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(event) => updateValue(event.target.value)} />
    </>
  );
};

export function CreateModal() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate} = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
    };
    mutate(foodData,{
      onSuccess: () => {
        toast.success("Envio bem-sucedido.", {position: toast.POSITION.BOTTOM_LEFT});
      }
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <Input label="Título" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="URL da imagem" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Postar
        </button>
      </div>
    </div>
  );
}


