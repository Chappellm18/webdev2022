
import router from '../router/index.js';
import { Login } from './users.js';

const session = {
    user: null,
    logout() {
        this.user = null;
        router.push('/login');
    },
    async login(username, password) {

        let user_res = await Login(username, password);
        if (user_res != null) {

            this.user = user_res;
            router.push('/');
        }
        // redirect page to home page


    },

}

// export session
export default session;