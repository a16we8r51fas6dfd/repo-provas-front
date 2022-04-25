import axios from "axios";

async function createUser(user) {
  await axios.post("http://localhost:5000/sign-up", user);
}

async function signIn(user) {
  return await axios.post("http://localhost:5000/sign-in", user);
}

export const api = {
  createUser,
  signIn,
};
