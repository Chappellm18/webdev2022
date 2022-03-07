import router from '../router/index.js';
import { Login } from './users.js';


const session = {
    user: null,
    async login(username, password) {

        let user = await Login(username, password);

        this.user = user;
        console.log(this.user);
        // redirect page to home page
        router.push('/');

    }
}

// export session
export default session;