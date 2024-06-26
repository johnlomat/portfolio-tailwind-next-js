import axios from "axios";

const sendEmail = async (name, email, message) => {
  return axios({
    method: "POST",
    url: "/api/send-mail",
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
};

export default sendEmail;
