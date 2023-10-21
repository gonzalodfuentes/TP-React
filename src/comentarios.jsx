
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './comentarios.css';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const jsonComments = localStorage.getItem('comentarios');
    if (jsonComments) {
      const parsedComments = JSON.parse(jsonComments);
      setComentarios(parsedComments);
    }
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const titulo = e.target.titulo.value;
    const comentario = e.target.comentario.value;

    const nuevoComentario = {
      nombre,
      titulo,
      comentario,
    };

    setComentarios([...comentarios, nuevoComentario]);

    localStorage.setItem('comentarios', JSON.stringify([...comentarios, nuevoComentario]));

    e.target.nombre.value = '';
    e.target.titulo.value = '';
    e.target.comentario.value = '';

    console.log(comentarios);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input type="text" name="nombre" placeholder="Nombre" className="usuario" />
        <label></label>
        <input type="text" name="titulo" placeholder="Titulo" className="usuario" />
        <br />
        <textarea name="comentario" placeholder="Comenta Aqui ;)" />
        <br />
        <button type="submit">Enviar Comentario</button>
      </form>
      <h1 className="coment">COMENTARIOS</h1>
      {comentarios.map((comentario, index) => (
        <div key={index} className="post">
          <p className="post1"><b>{comentario.nombre}</b></p>
          <p className="post2">{comentario.titulo}</p>
          <p className="post3">{comentario.comentario}</p>
        </div>

      ))}
      <br /><br /><br />
      <footer>
        <Link to="/" className="home"><b>Volver al Home</b></Link>
      </footer>
    </>
  );
};

export default Comentarios;