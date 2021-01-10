import React from 'react'
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:3000` });

export default function Index({ userList, setUsers }) {
    const users = userList;
    const initialUser = {
        name: "",
        email: "",
        tags: ""
    };
    const [selectedID, setSelectedID] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = React.useState(false)
    const [isModalAddOpen, setIsModalAddOpen] = React.useState(false)
    const [newUser, setNewUser] = React.useState(initialUser);

    // Delete
    const openModalDelete = (e, id) => {
        e.preventDefault();
        setSelectedID(id);
        setIsModalOpen(true)
    }

    const handleDelete = async () => {
        try {
            await api.delete(`/users/${selectedID}`);
            setUsers(userList.filter(user => user.id !== selectedID));
            setIsModalOpen(false)

        } catch (error) {
            console.log("Error: ", error);
        }
    }

    // Edit
    const openModalEdit = (e, id) => {
        e.preventDefault();
        setSelectedID(id)
        setIsModalEditOpen(true)
    }

    const handleEditInputNameChange = (event) => {
        const name = event.target.value;
        setNewUser({ ...newUser, name: name });
    };

    const handleEditInputTagsChange = (event) => {
        const tags = event.target.value;
        setNewUser({ ...newUser, tags: tags });
    };

    const handleEditUser = async (e) => {
        try {
            const response = await api.put(`/users/${selectedID}`, newUser);
            console.log('Returned data:', response);
            setIsModalEditOpen(false);
            window.location.reload();

        } catch (error) {
            console.log("Error: ", error);
        }

    }

    // Add
    const openModalAdd = (e) => {
        e.preventDefault();
        setIsModalAddOpen(true)
    }

    const handleAddInputNameChange = (event) => {
        const name = event.target.value;
        setNewUser({ ...newUser, name: name });
    };

    const handleAddInputEmailChange = (event) => {
        const email = event.target.value;
        setNewUser({ ...newUser, email: email });
    };

    const handleAddInputTagsChange = (event) => {
        const tags = event.target.value;
        setNewUser({ ...newUser, tags: tags });
    };

    const handleAddUser = async (e) => {
        try {
            const response = await api.post('/users', newUser)
            console.log('Returned data:', response);
            setIsModalAddOpen(false);
            window.location.reload();

        } catch (error) {
            console.log("Error: ", error);
        }

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
                                                onClick={event => openModalEdit(event, user.id)}
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
                        onClick={event => openModalAdd(event)}>Incluir novo usuário
                    </button>
                </div>
            </div>

            {/* modals are below, delete is the first */}

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

            {/* Edit modal  */}

            {isModalEditOpen &&
                <div id="modal-edit" className="modal-show-edit">
                    <div >
                        <div className="container">
                            <a href="/" onClick={closeModal} style={{ color: "black" }}>x</a>
                            <div style={{ alignSelf: "center" }}>
                                <h6>Editar usuário</h6>
                            </div>
                            <div style={styles.inputCustom}>
                                <div className="row">
                                    <div className="input-field">
                                        <input onChange={handleEditInputNameChange} id="name" type="text" className="validate" required></input>
                                        <label className="active" htmlFor="name">Nome</label>
                                    </div>
                                </div>
                            </div>

                            <div style={styles.inputCustom}>
                                <div className="row">
                                    <div className="input-field">
                                        <input onChange={handleEditInputTagsChange} placeholder="Ex: Participou do evento de Janeiro, É aluno." id="tags" type="text" className="validate" required></input>
                                        <label className="active" htmlFor="tags">Tags</label>
                                    </div>
                                </div>
                            </div>

                            <button style={styles.alignCenter} className="custom-button-edit" onClick={event => handleEditUser(event)}>Salvar</button>
                        </div>
                    </div>
                </div>
            }

            {/* Add Modal */}

            {isModalAddOpen &&
                <div id="modal-add" className="modal-show-add">
                    <div >
                        <div className="container">
                            <a href="/" onClick={closeModal} style={{ color: "black" }}>x</a>
                            <div style={{ alignSelf: "center" }}>
                                <h6>Incluir novo usuário</h6>
                            </div>
                            <div style={styles.inputCustom}>
                                <div className="row">
                                    <div className="input-field">
                                        <input onChange={handleAddInputNameChange} id="name" type="text" className="validate"></input>
                                        <label className="active" htmlFor="name">Nome</label>
                                    </div>
                                </div>
                            </div>

                            <div style={styles.inputCustom}>
                                <div className="row">
                                    <div className="input-field">
                                        <input onChange={handleAddInputEmailChange} id="email" type="text" className="validate"></input>
                                        <label className="active" htmlFor="email">E-mail</label>
                                    </div>
                                </div>
                            </div>

                            <div style={styles.inputCustom}>
                                <div className="row">
                                    <div className="input-field">
                                        <input onChange={handleAddInputTagsChange} placeholder="Ex: Participou do evento de Janeiro, É aluno." id="tags" type="text" className="validate"></input>
                                        <label className="active" htmlFor="tags">Tags</label>
                                    </div>
                                </div>
                            </div>

                            <button style={styles.alignCenter} className="custom-button-add" onClick={event => handleAddUser(event)}>Salvar</button>
                        </div>
                    </div>
                </div>
            }

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
    },
    alignCenter: {
        alignSelf: "center"
    },
    inputCustom: {
        color: "yellow",
        alignSelf: "start",
        marginLeft: "4%",
        width: "90%",
    }

}
