import React from 'react'
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:3000` });

export default function Index({ userList }) {
    const users = userList;
    let showModal = false;
    let userId = 0;

    const openModalDelete = (e, id) => {
        e.preventDefault();
        userId = id;
        console.log(id, 'id recebido');
        showModal = !showModal;
        const element = document.getElementById('modal');

        setTimeout(() => {
            if (showModal) {
                element.classList.add('modal-show')
            }
            else {
                element.classList.remove('modal-show')
            }
        }, 250);
    }

    const handleDelete = async (e) => {
        console.log("deleting", userId);
        await api.delete(`/users/${userId}`);
        window.location.reload();
    }

    const openModal = (e, id) => {
        e.preventDefault();
        userId = id;
        console.log(id, 'id recebido');
        showModal = !showModal;
        const element = document.getElementById('modal-edit');

        setTimeout(() => {
            if (showModal) {
                element.classList.add('modal-show-edit')
            }
            else {
                element.classList.remove('modal-show-edit')
            }
        }, 250);
    }

    const handleEdit = async (e) => {
        console.log("editing", userId);

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
                            <th style={{ width: "25%" }}>Nome</th>
                            <th style={{ width: "25%" }}>E-mail</th>
                            <th style={{ width: "25%" }}>Tags</th>
                            <th style={{ width: "25%" }}>Ações</th>
                        </tr>

                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.tags}</td>
                                    <td>
                                        <div style={styles.marginTable}>
                                            <button className="custom-button-edit"
                                                onClick={event => openModal(event, user.id)}
                                                value={user.id} style={{ marginLeft: "6%" }}>Editar
                                            </button>
                                        &nbsp;

                                            <button className="custom-button"
                                                onClick={event => openModalDelete(event, user.id)}
                                                value={user.id} style={{ marginLeft: "6%" }}>Deletar
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        })}
                    </thead>
                </table>

                <div style={styles.bottomDiv}>
                    <button className="custom-button-add"
                        onClick={event => openModal(event)}>Incluir novo usuário
                    </button>
                </div>
            </div>

            <div id="modal">
                <div >
                    <div className="container">
                        <a href="/" onClick={event => openModalDelete(event)} style={{ color: "black" }}>x</a>
                        <div style={styles.alignCenter}>
                            Deseja realmente deletar?
                        </div>
                        <button style={styles.alignCenter} className="custom-button" onClick={event => handleDelete(event)}>Deletar</button>
                    </div>
                </div>
            </div>

            <div id="modal-edit">
                <div >
                    <div className="container">
                        <a href="/" onClick={event => openModal(event)} style={{ color: "black" }}>x</a>
                        <div style={styles.alignCenter}>
                            editar
                        </div>
                        <button style={styles.alignCenter} className="custom-button-edit" onClick={event => handleEdit(event)}>Salvar</button>
                    </div>
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
        marginRight: "2%",
        display: "flex",
        justifyContent: "flex-end"
    },
    mainDiv: {
        display: "flex",
        flexDirection: "column",
        textAlignLast: "center"
    },
    alignCenter: {
        alignSelf: "center"
    }

}
