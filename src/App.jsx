import React from "react";
import FruitTitle from "./components/FruitTitle/FruitTitle";
import Paragraphe from "./components/Paragraphe/Paragraphe";
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";
import Titre from "./components/Titre/Titre";
<script src="https://cdn.tailwindcss.com"></script>;

function App() {

  const showAlert = () => {
    alert("Bouton cliqué !");
  };

  return(
    <section className="flex flex-col justify-center items-center">
    <div className="text-center bg-slate-950">
         <Titre  titleName="le voute du feu sacré"/>
        <Image imageAuChoix="/src/assets/lion.jpg" alt="Screenshot" />
         <FruitTitle nomDuTitre = "CANARDAGE" />
         <Paragraphe paraRandom ="lorem des chams des bois de Octavio" />
         <Button text="cliquez !!" onClick={showAlert} />
    </div>
    </section>
  );

};


export default App;