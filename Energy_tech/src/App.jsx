import'./app.css'

function App() {
  return (
    <>
      {/* Contenedor del fondo */}
      <div className="background">
        {/* Imagen sobre el fondo */}
        <img 
          src="https://www.solunion.es/wp-content/uploads/elementor/thumbs/energias-renovables-solunion-qukhx05hh1xjz0x7e2d341cg850dctzbrx2x7wqou0.jpg" // Reemplaza con la ruta correcta de tu imagen
          alt="Imagen sobre el fondo" 
          className="foreground-image" 
        />
        {/* Titulo sobre la imagen*/}
        <h1 classname="title-over-image">Energia tech</h1>
      </div>
      
    </>
  );
}

export default App;


