import './BandForm.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


function BandForm() {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [genre, setGenre] = useState("");
    const [logo, setLogo] = useState("");
    const [biography, setBiography] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");

    const [edit, setEdit] = useState(false);

    const [bandsList, setBands] = useState([]);

    const addBand = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('country', country);
        formData.append('genre', genre);
        formData.append('biography', biography);
        formData.append('phone', phone);
        formData.append('logo', logo);

    Axios.post("http://localhost:3001/createBand", formData)
        .then(() => {
            alert("Registro Ok");
            clean();
        });
    };

    const updateBand = () => {
        Axios.put("http://localhost:3001/updateBand", {
          name: name,
          country: country,
          genre: genre,
          logo: logo,
          biography: biography,
          phone: phone,
          id:id,
        }).then(() => {
          alert("Actualizado Ok")
          clean();
        });
    };

    const clean = () => {
        setName("");
        setCountry("");
        setGenre("");
        setLogo("");
        setBiography("");
        setPhone("");
        setEdit(false);
    }

    return (
        <div className='container'>
            <div className="form">
                <div className="date">
                    <label>Nombre: <input onChange={(event)=>{
                        setName(event.target.value);
                    }} type="text" value={name}></input></label>
                    <label>Pais: <input onChange={(event)=>{
                        setCountry(event.target.value);
                    }} type="text" value={country}></input></label>
                    <label>Genero: <input onChange={(event)=>{
                        setGenre(event.target.value);
                    }} type="text" value={genre}></input></label>
                    <label>Logo: <input type="file" accept="image/*"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            setLogo(file);
                        }} />
                    </label>
                    <label>Biografia: <input onChange={(event)=>{
                        setBiography(event.target.value);
                    }} type="text" value={biography}></input></label>
                    <label>Telefono: <input onChange={(event)=>{
                        setPhone(event.target.value);
                    }} type="text" value={phone}></input></label>
                    {
                        edit?
                        <div>
                            <button onClick={updateBand}>Actualizar</button>
                            <button onClick={clean}>Cancelar</button>
                        </div>
                        :<button onClick={addBand}>Registrar</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default BandForm;