import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./BandForm.css";


function BandForm() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [contry, setContry] = useState("");
    const [genre, setGenre] = useState("");
    const [logo, setLogo] = useState("");
    const [biography, setBiography] = useState("");
    const [phone, setPhone] = useState("");

    const [edit, setEdit] = useState(false);

    const [bandsList, setBands] = useState([]);


    const addBand = () => {
        Axios.post("http://localhost:3001/api/bands/createBand", {
            name: name,
            contry: contry,
            genre: genre,
            logo: logo,
            biography: biography,
            phone: phone
        }).then(() => {
            alert("Registro Banda Ok");
        });
    };

    const updateBand = () => {
        Axios.put("http://localhost:3001/api/bands/updateBand", {
            name: name,
            contry: contry,
            genre: genre,
            logo: logo,
            biography: biography,
            phone: phone,
            id: id
        }).then(() => {
            alert("Actualizado Ok");
            cleanFields();
        });
    };

    const editBand = (val) => {
        setEdit(true);    
        setName(val.name);
        setContry(val.contry);
        setGenre(val.genre);
        setLogo(val.logo);
        setId(val.id);
    }

    const getBands = () => {
        Axios.get("http://localhost:3001/api/bands").then((response) => {
            setBands(response.data);
        });
    };

    const deleteBand = (id) => {
        Axios.delete(`http://localhost:3001/api/bands/deleteBand/${id}`).then(() => {
          alert("Eliminado Ok")
        });
    };

    const cleanFields = () => {
        setName("");
        setContry("");
        setGenre("");
        setLogo("");
        setEdit(false);
      }

    useEffect(() => {getBands()}, []);

    return (
        <div className="bandForm">
            <form onSubmit={addBand}>
                <h2>Agregar Banda</h2>
                <div className="bandForm-container">
                    <div className="input-group">
                        <label>Nombre:</label> 
                        <input onChange={(event)=>{
                            setName(event.target.value);
                        }} type="text" value={name}></input>
                    </div>
                    <div className="input-group">
                        <label>Pais:</label>
                        <input onChange={(event)=>{
                            setContry(event.target.value);
                        }} type="text" value={contry}></input>
                    </div>
                    <div className="input-group">
                        <label>Genero:</label> 
                        <input onChange={(event)=>{
                            setGenre(event.target.value);
                        }} type="text" value={genre}></input>
                    </div>
                    <div className="input-group">
                        <label>Logo:</label> 
                        <input type="file" accept="image/*" onChange={(event) => {
                            const selectedFile = event.target.files[0];
                            if (selectedFile) {
                            setLogo(selectedFile);
                            }
                        }} />
                    </div>
                    <div className="input-group">
                        <label>Biografia:</label> 
                        <input onChange={(event)=>{
                            setBiography(event.target.value);
                        }} type="text" value={biography}></input>
                    </div>
                    <div className="input-group">
                        <label>Telefono:</label> 
                        <input onChange={(event)=>{
                            setPhone(event.target.value);
                        }} type="text" value={phone}></input>
                    </div>
                </div>                
                {
                        <button onClick={addBand}>Registrar</button>
                }
            </form>
            <div className='list'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Pais</th>
                            <th>Genero</th>
                            <th>Logo</th>
                            <th>Biografia</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bandsList.map((band) => (
                            <tr key={band.id}>
                                <td>{band.contry}</td>
                                <td>{band.genre}</td>
                                <td>{band.logo}</td>
                                <td>{band.biography}</td>
                                <td>{band.phone}</td>
                                <td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BandForm;