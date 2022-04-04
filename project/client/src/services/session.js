import router from '../router/index.js';
import { Login } from './users.js';


const session = {
    user: {
        email: null,
        message: null,
        name: null,
        password: null,
        role: null,
        userID: null,
        username: null
    },
    async login(username, password) {

        let user = await Login(username, password);

        this.user = user;

        // redirect page to home page
        router.push('/');

    },
}

// export session
export default session;