import './BandForm.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


function BandForm() {

    const [name, setName] = useState("");
    const [contry, setContry] = useState("");
    const [genre, setGenre] = useState("");
    const [logo, setLogo] = useState("");
    const [biography, setBiography] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");

    const [edit, setEdit] = useState(false);

    const [bandsList, setBands] = useState([]);

    const addBand = () => {
        Axios.post("http://localhost:3001/createBand", {
          name: name,
          contry: contry,
          genre: genre,
          logo: logo,
          biography: biography,
          phone: phone,
        }).then(() => {
          /*getBandas();*/
          alert("Registro Ok");
          clean();
        });
    };

    const updateBand = () => {
        Axios.put("http://localhost:3001/updateBand", {
          name: name,
          contry: contry,
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
        setContry("");
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
                        setContry(event.target.value);
                    }} type="text" value={contry}></input></label>
                    <label>Genero: <input onChange={(event)=>{
                        setGenre(event.target.value);
                    }} type="text" value={genre}></input></label>
                    <label>Logo: <input onChange={(event)=>{
                        setLogo(event.target.value);
                    }} type="text" value={logo}></input></label>
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