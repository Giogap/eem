import './BandForm.css';
import { useState } from "react";
import Axios from "axios";

function BandForm() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [logo, setLogo] = useState(null); // Cambiado a null
  const [biography, setBiography] = useState("");
  const [phone, setPhone] = useState("");

  const handleFileChange = (event) => {
    // Guardar el archivo seleccionado en el estado 'logo'
    setLogo(event.target.files[0]);
  };

  const addBand = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("country", country);
    formData.append("genre", genre);
    formData.append("logo", logo); // Agregando el logo al formData
    formData.append("biography", biography);
    formData.append("phone", phone);

    Axios.post("http://localhost:3001/createBand", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        alert("Registro Ok");
        clean();
      })
      .catch((error) => {
        console.error("Error al registrar la banda:", error);
      });
  };

  const clean = () => {
    setName("");
    setCountry("");
    setGenre("");
    setLogo(null); // Reiniciar el estado de logo a null
    setBiography("");
    setPhone("");
  };

  return (
    <div className="container">
      <div className="formulario">
        <div className="datos">
          <label> Nombre:{" "} <input onChange={(event) => {
                setName(event.target.value);
              }} type="text" value={name} />
          </label>
          <label> Pais:{" "} <input onChange={(event) => {
                setCountry(event.target.value);
              }} type="text" value={country} />
          </label>
          <label>
            Genero:{" "} <input onChange={(event) => {
                setGenre(event.target.value);
              }} type="text" value={genre} />
          </label>
          <label>
            Logo:{" "} <input onChange={handleFileChange}
              type="file" />
          </label>
          <label>
            Biografia:{" "} <input onChange={(event) => {
                setBiography(event.target.value);
              }} type="text" value={biography} />
          </label>
          <label>
            Telefono:{" "} <input onChange={(event) => {
                setPhone(event.target.value);
              }} type="text" value={phone} />
          </label>
          <button onClick={addBand}>Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default BandForm;