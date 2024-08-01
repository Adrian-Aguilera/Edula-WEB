import axios from "axios";
async function getRequest(apiUrl, message) {
  const jsonData = {
    type_engine: {
      EngineGeneral: true,
    },
    mesage: message,
  };
  //carga desde el archivo .env (crear uno con su respectiva nombre: VUE_APP_API_TOKEN, VUE_APP_API_URL)
  const token = process.env.VUE_APP_API_TOKEN;
  const configAuth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //console.log(process.env.VUE_APP_API_URL+apiUrl)

  const response = await axios.post(`${process.env.VUE_APP_API_URL}/${apiUrl}`, jsonData, configAuth)
  return response
}
const optionRequests = {
    getRequest
}
export default optionRequests;

