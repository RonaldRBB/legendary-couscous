import React, { useState, useEffect } from 'react';
import fetchUserData from '../api/users';
function UserData() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await fetchUserData();
                setUserData(user);
            } catch (error) {
                console.error('Error al cargar los datos del usuario:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Información del Usuario</h1>
            {userData ? (
                <div>
                    <p>Nombre: {userData.first_name} {userData.last_name}</p>
                    <p>Email: {userData.email}</p>
                    {/* Agrega más campos según la estructura de datos que recibas */}
                </div>
            ) : (
                <p>Cargando información del usuario...</p>
            )}
        </div>
    );
}
export default UserData;
