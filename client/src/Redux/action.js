// import axios from "axios";

export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";


export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});


const url = "https://my-json-server.typicode.com/Chiranjit34/fake-api/data";
// const url = "http://localhost:8080/data";

export const getData = (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => dispatch(getDataSuccess(res)))
};