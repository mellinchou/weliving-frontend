import Vue from "vue";
import Vuex from "vuex"
import User from './user'
import Axios from "axios";

Vue.use(Vuex);

export default{
    modules:{
        user:User,
    },
    actions:{
        retrieveToken(context,credentials){
            Axios.post('/login',{
                email:credentials.email,
                password:credentials.password
            }).then(response=>{
                console.log(response);
            })
        }
    }
}
