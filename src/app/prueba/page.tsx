"use client"

import axios from 'axios';
import SketchPad from '../public components/sketchPad/sketchPad';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { Container, Row } from 'react-bootstrap';


const DrawNumber = () => {
  const params = useSearchParams();

  const handleImageCapture = async (dataURL: string) => {
    await axios.post('http://localhost:5050/spe', {
      image_tensor: dataURL,
      username: params.get("username"),
      algorithm: params.get("algorithm"),
    }).then((response) => {
      console.log(response.data);
    })
  };

  return (
    <Container>
        <SketchPad width={280} height={280} onImageCapture={handleImageCapture} />
        
        <button>Predecir Número</button>
    </Container>

  );
};

export default DrawNumber;
