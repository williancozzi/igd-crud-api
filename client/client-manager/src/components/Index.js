import React from 'react'
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:3000` });

export default function Index({ userList, setUsers }) {
    const users = userList;
    const [selectedID, setSelectedID] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    let showModal = null;

    // inicio da funçao que abre a modal de delete
    const openModalDelete = (e, id) => {
        e.preventDefault();
        setSelectedID(id);
        setIsModalOpen(true)
    }

    //funçao que confirma a exclusao, dentro da modal
    const handleDelete = async () => {
        try {
            await api.delete(`/users/${selectedID}`);
            setUsers(userList.filter(user => user.id !== selectedID));
            setIsModalOpen(false)

        } catch (error) {
            console.log("Erro", error);
        }
    }
    // inicio da funçao que abre a modal de edit
    const openModalEdit = (e, id, flag) => {
        e.preventDefault();
        setSelectedID(id)
        console.log(id, 'id recebido de edit');
        console.log(flag, 'flag recebida de edit');
        showModal = !showModal;
        const element = document.getElementById('modal-edit');

        setTimeout(() => {
            if (showModal) {
                element.classList.add('modal-show-edit')
            }
            else {
                element.classList.remove('modal-show-edit')
            }
        }, 100);
    }

    // funçao que confirma a ediçao, dentro da modal
    const handleEditUser = async (e) => {
        console.log("editing", selectedID);

    }
    // inicio da funçao que abre a modal de adicionar user
    const openModalAdd = (e, id, flag) => {
        e.preventDefault();
        setSelectedID(id)
        console.log(id, 'id recebido de add');
        console.log(flag, 'flag recebida de add');
        showModal = !showModal;
        const element = document.getElementById('modal-add');

        setTimeout(() => {
            if (showModal) {
                element.classList.add('modal-show-add')
            }
            else {
                element.classList.remove('modal-show-add')
            }
        }, 100);
    }


    //funçao que confirma a inclusao de user, dentro da modal
    const handleAddUser = async (e) => {
        console.log("adding", selectedID);
    }

    const closeModal = () => {
        setIsModalOpen(false);
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
                                                onClick={event => openModalEdit(event, user.id, true)}
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
                        onClick={event => openModalAdd(event, null, false)}>Incluir novo usuário
                    </button>
                </div>
            </div>

            {/* Início das modais */}

            {isModalOpen &&
                <div id="modal" className="modal-show">
                    <div >
                        <div className="container">
                            <a href="/" onClick={closeModal} style={{ color: "black" }}>x</a>
                            <div style={styles.alignCenter}>
                                Deseja realmente deletar?
                        </div>
                            <button style={styles.alignCenter} className="custom-button" onClick={event => handleDelete(event)}>Deletar</button>
                        </div>
                    </div>
                </div>
            }

            <div id="modal-edit">
                <div >
                    <div className="container">
                        <a href="/" onClick={event => openModalEdit(event)} style={{ color: "black" }}>x</a>
                        <div style={styles.alignCenter}>
                            editar
                        </div>
                        <button style={styles.alignCenter} className="custom-button-edit" onClick={event => handleEditUser(event)}>Salvar</button>
                    </div>
                </div>
            </div>

            <div id="modal-add">
                <div >
                    <div className="container">
                        <a href="/" onClick={event => openModalAdd(event)} style={{ color: "black" }}>x</a>
                        <div style={styles.alignCenter}>
                            add
                        </div>
                        <button style={styles.alignCenter} className="custom-button-add" onClick={event => handleAddUser(event)}>Salvar</button>
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
        marginTop: "2%",
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
