//import router from '../router/index.js';
import { login } from './users.js';


const session = {
    user: null,
    async login(username, password) {

        const user = await login(username, password);
        this.user = user;
    },
}

// export session
export default session;