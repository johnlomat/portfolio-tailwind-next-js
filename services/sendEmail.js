import axios from "axios";

const sendEmail = async (name, email, message) => {
  return axios({
    method: "POST",
    url: "/api/send-email",
    data: {
      name,
      email,
      message,
    },
  });
};

export default sendEmail;
