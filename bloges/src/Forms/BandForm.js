import './BandForm.css';
import { useState } from "react";
import Axios from "axios";

function BandForm() {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [genre, setGenre] = useState("");
    const [logo, setLogo] = useState("");
    const [biography, setBiography] = useState("");
    const [phone, setPhone] = useState("");

    const addBand = () => {
        Axios.post("http://localhost:3001/createBand", {
            name: name,
            country: country,
            genre: genre,
            logo: logo,
            biography: biography,
            phone: phone,
        }).then(() => {
            alert("Registro Ok");
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
    }

    return (
        <div className='container'>
            <div className="formulario">
                <div className="datos">
                    <label>Nombre: <input onChange={(event) => { 
                        setName(event.target.value); }} type="text" 
                        value={name}></input>
                    </label>
                    <label>Pais: <input onChange={(event) => { 
                        setCountry(event.target.value); }} type="text" 
                        value={country}></input>
                    </label>
                    <label>Genero: <input onChange={(event) => { 
                        setGenre(event.target.value); }} type="text" 
                        value={genre}></input>
                    </label>
                    <label>Logo: <input onChange={(event) => { 
                        setLogo(event.target.value); }} type="text" 
                        value={logo}></input>
                    </label>
                    <label>Biografia: <input onChange={(event) => { 
                        setBiography(event.target.value); }} type="text" 
                        value={biography}></input>
                    </label>
                    <label>Telefono: <input onChange={(event) => { 
                        setPhone(event.target.value); }} type="text" 
                        value={phone}></input>
                    </label>
                    <button onClick={addBand}>Registrar</button>
                </div>
            </div>
        </div>
    )
}

export default BandForm;
