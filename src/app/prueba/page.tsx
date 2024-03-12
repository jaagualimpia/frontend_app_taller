"use client"

import axios from 'axios';
import SketchPad from '../public components/sketchPad/sketchPad';

const DrawNumber = () => {

  const handleImageCapture = async (dataURL: string) => {
    console.log(String(dataURL));

    await axios.post('http://localhost:5050/spe', {
      image_tensor: dataURL,
      username: "nombredeprueba",
      algorithm: "Random Forest",
    }).then((response) => {
      console.log(response);
    })
};

  return (
    <div>
      <SketchPad width={280} height={280} onImageCapture={handleImageCapture}/>
      <button>Predecir Número</button>
    </div>
  );
};

export default DrawNumber;
