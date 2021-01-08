import './App.css';
import axios from "axios";
import React from 'react';

const api = axios.create({
    baseURL: `http://localhost:3000`
});

function App() {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const fetchUser = async () => {
            console.log('entrei');
            const { data } = await api.get('/users');
            setUsers(data);
        }

        fetchUser();
    }, []);

    console.log('resultado', users);

    return (
        <div>
            <h1 className="center">Controle de usuários - IGD</h1>
            {users.map((user => {
                return (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <li>{user.tags}</li>
                    </ul>
                )
            }))}
        </div>
    );
}

export default App;
