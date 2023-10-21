import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './libro.png';
import Comentarios from './Comentarios'; 

function App() {
  const imagen = {
    width: '220px',
    height: '200px',
  };

  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  let admin;
  if (!isActive) {
    admin = (
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Codigo"
        className="administrador"
      />
    );
  }

  useEffect(() => {
    const jsonComments = localStorage.getItem('comentarios');
    if (jsonComments) {
      const parsedComments = JSON.parse(jsonComments);
      setComentarios(parsedComments);
    }
  }, []); 

  const handleComentarioSubmit = (nuevoComentario) => {
    setComentarios([...comentarios, nuevoComentario]);

    localStorage.setItem('comentarios', JSON.stringify([...comentarios, nuevoComentario]));
  };

  return (
    <>
      <header>
        <img src={logo} alt="react" title="React" style={imagen} />
        <h1>BLOG</h1>
        <Link to="/comentarios" className="comentarios">
          COMENTAR
        </Link>
        <Link className="code" onClick={handleClick}>
          CODIGO
        </Link>
        <p className="administra">{admin}</p>
      </header>
      <section>
  <Comentarios />
</section>
    </>
  );
}

export default App;
