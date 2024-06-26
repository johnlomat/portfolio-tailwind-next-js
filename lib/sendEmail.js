import axios from "axios";

const sendEmail = async (name, email, message) => {
  return axios({
    method: "POST",
    url: "https://usebasin.com/f/d8282983945a.json",
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
};

export default sendEmail;
