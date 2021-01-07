import http from "../http-common";

const getAll = () => {
    http.get("/getAll");
};

const getById = (id) => {
    http.get(`/byId/${id}`);
};

const createUser = (data) => {
    http.post("/createUser", data);
};

const deleteUser = (id) => {
    http.delete(`/deleteUser/${id}`);
};

const updateUser = (id, data) => {
    http.put(`/updateUser/${id}`, data);
};
