import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SpecialiteTable = () => {
  const [specialites, setCities] = useState([]);

  useEffect(() => {
    axios.get("/api/specialites/all").then((response) => {
      setCities(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      axios.delete(`/api/specialites/${id}`).then(() => {
        setCities(specialites.filter((specialite) => specialite.id !== id));
      });
    }
  };

  const handleEdit = (id) => {
    const newName = window.prompt("Enter the new name for this city:");
    if (newName) {
      axios.put(`/api/specialites/update`, {nom:newName }).then(() => {
        setCities(specialites.map((specialite) => {
          if (specialite.id === id) {
            return { ...specialite, nom: newName };
          }
          return specialite;
        }));
      });
    }
  };

  return (
    <div>
      <h2 className="table mt-5 text-center">Liste des specialites</h2>
      <Link to="/ajouter-specialite" className="btn btn-primary ">
        Create Specialite
      </Link>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {specialites.map((specialite) => (
            <tr key={specialite.id}>
              <td>{specialite.id}</td>
              <td>{specialite.nom}</td>
              <td>
                <button className="btn btn-outline-danger "   onClick={() => handleDelete(specialite.id)}>
                 Supprimer
                </button>
                {'   '} 
                <button className="btn btn-outline-primary ml-2" onClick={() => handleEdit(specialite.id)}>
                 Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default SpecialiteTable;
