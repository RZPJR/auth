import axios from 'axios'
import auth from '../../../services/auth'
import http from '../../../services/http'

const actions = {
    login: async ({}, payload) => {
      try {
        localStorage.setItem('bearer', "")
        const { data } = await auth.login(payload);
        const token = data.token;
        localStorage.setItem('bearer',token)
        actions.fetchPriv()
      } catch (error) {
        console.log(error);
      }
    },
    fetchPriv: async () => {
      try {
        localStorage.setItem('priv', "")
        const res = await http.get("/permission/privilege", [])
        localStorage.setItem("priv", res.data.data);
        window.location.replace('/Home')
      } catch (error) {
        console.log(error);
      }
    },
    checkMaintenance: async () => {
      try {
        let API_URL = process.env.VUE_APP_API_URL
        axios.get(API_URL + '/auth/checkmaintenance').then((response) => {
          return response
        })
      } catch (error) {
        console.log(error);
      }
    },
}

export default actions

