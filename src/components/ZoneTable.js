import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const ZoneTable = ({ villeId }) => {
    const [zones, setZones] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedZone, setSelectedZone] = useState(null);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/zones/all`);
            setZones(result.data);
        };
        fetchData();
    }, [villeId]);

    useEffect(() => {
        const fetchCities = async () => {
            const result = await axios(`/api/villes/all`);
            setCities(result.data);
        };
        fetchCities();
    }, []);

    const handleDelete = (zoneId) => {
        if (window.confirm("Are you sure you want to delete this zone?")) {
            axios.delete(`/api/zones/${zoneId}`).then(() => {
                setZones(zones.filter((zone) => zone.id !== zoneId));
            });
        }
    };

    const handleOpenModal = (zone) => {
        setSelectedZone(zone);
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedZone(null);
        setModalIsOpen(false);
    };

    const handleSave = () => {
        // TODO: handle save logic
        handleCloseModal();
    };

    return (
        <div>
            <h2 className="table mt-5 text-center">Liste des Zones</h2>
            <Link to={`/ajouter-zone`} className="btn btn-primary">
                Ajouter Zone
            </Link>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {zones.map((zone) => (
                        <tr key={zone.id}>
                            <td>{zone.id}</td>
                            <td>{zone.nom}</td>
                            <td>{zone.ville && zone.ville.nom}</td>
                            <td>
                                <button className="btn btn-outline-danger" onClick={() => handleDelete(zone.id)}>
                                   Supprimer
                                </button>{'  '}
                                <button className="btn btn-outline-primary" onClick={() => handleOpenModal(zone)}>
                                    Modifier
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                <h3>Modification de la zone</h3>
                <ul>
                    <li>
                        <label>Nom de la zone:</label>
                        <input type="text" value={selectedZone && selectedZone.name} />
                    </li>
                    <li>
                        <label>Ville:</label>
                        <select value={selectedZone && selectedZone.ville && selectedZone.ville.id}>
                            {cities.map((ville) => (
                                <option key={ville.id} value={ville.id}>
                                    {ville.nom}
                                </option>
                            ))}
                        </select>
                    </li>
                </ul>
                <button className="btn btn-primary" onClick={handleCloseModal}>
                    Annuler
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                    Sauvegarder
                </button>
            </Modal>

        </div>
    );
};

export default ZoneTable
