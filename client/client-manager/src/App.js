import './App.css';
import axios from "axios";
import React from 'react';
import Header from './components/Header';
import Index from './components/Index';

const api = axios.create({
    baseURL: `http://localhost:3000`
});

function App() {

    const [users, setUsers] = React.useState([]);

    // makes the first request to list users, and send to the component
    React.useEffect(() => {
        const fetchUser = async () => {
            const { data } = await api.get('/users');
            setUsers(data);
        }

        fetchUser();
    }, []);

    return (
        <div>
            <Header></Header>
            <Index userList={users} setUsers={setUsers}></Index>
        </div>
    );
}

export default App;
