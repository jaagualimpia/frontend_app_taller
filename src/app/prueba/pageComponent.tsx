import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Container } from "react-bootstrap";
import SketchPad from "../public components/sketchPad/sketchPad";

const DrawNumberMiniComponent = () => {
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
      </Container>
    );
};

export default DrawNumberMiniComponent;