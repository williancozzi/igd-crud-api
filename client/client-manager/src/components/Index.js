import React from 'react'
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:3000` });

export default function Index({ userList }) {
    const users = userList;

    const handleDelete = async (e) => {
        console.log("deleting", e.target.value);
        const deletedId = await e.target.value;
        await api.delete(`/users/${deletedId}`);
        window.location.reload();
    }

    return users ? (
        <div style={styles.topDiv}>
            <div>
                <h3 style={{ textAlign: "center", marginBottom: "2%" }}>Lista de usuários</h3>
            </div>

            <div style={styles.mainDiv}>
                <table>
                    <thead>

                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Tags</th>
                            <th>Ações</th>
                        </tr>

                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.tags}</td>
                                    <td>
                                        <div style={styles.marginTable}>
                                            <button className="waves-effect waves-light btn">Editar</button>
                                        &nbsp;
                                        <button value={user.id} style={{ marginLeft: "6%" }} className="waves-effect waves-light btn red" onClick={handleDelete}>Deletar</button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        })}
                    </thead>
                </table>

                <div style={styles.bottomDiv}>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Novo usuário
                    <i className="material-icons right">add</i>
                    </button>
                </div>
            </div>
        </div >
    ) : null;
}

const styles = {
    marginTable: {
        marginTop: "2%",
        marginBottom: "2%"
    },
    topDiv: {
        display: "flex",
        flexDirection: "column",
        padding: "2%"
    },
    bottomDiv: {
        marginTop: "4%",
        marginRight: "4%",
        display: "flex",
        justifyContent: "flex-end"
    },
    mainDiv: {
        display: "flex",
        flexDirection: "column",
        textAlignLast: "center"
    }

}
