import './App.css';
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3000`
});

const handleSubmit = async () => {
    const { response } = await api.get("/users");

    console.log({ response });
    console.log("handle");

};

function App() {
    return (
        <div>
            <h1 className="center">Controle de usuários - IGD</h1>
            <button onClick={handleSubmit}>get all</button>
        </div>
    );
}

export default App;
