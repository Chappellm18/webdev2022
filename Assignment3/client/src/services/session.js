import router from '../router/index.js';
import { login } from './users.js';


const session = {
    user: null,
    async login(username, password) {
        try {
            const user = await login(username, password);
            this.user = user;
        } catch (err) {
            throw err;
        }
    },
}