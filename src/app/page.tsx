import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="fs-4 fw-medium text-center">
        Bienvenidos, en este proyecto crearemos nuestros primeros modelos de inteligencia artificial.
        <br />

        Los probaremos y
        además competiremos para ver quien puede hacer el mejor

        <br />

        buena suerte a todos
      </p>
      <div className="text-center">
        <img src={"https://production-media.paperswithcode.com/datasets/MNIST-0000000001-2e09631a_09liOmx.jpg"} alt="Imagen de redes Machine learning" />
      </div>
    </>
  );
}
