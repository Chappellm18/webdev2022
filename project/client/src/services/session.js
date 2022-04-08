import router from '../router/index.js';
import { Login } from './users.js';
import { CheckOrg } from './users.js'

const session = {
    user: null,
    async login(username, password) {

        let user_res = await Login(username, password);

        this.user = user_res;

        // redirect page to home page
        router.push('/');

    },
    async GetOrg() {
        return await CheckOrg();
    },
}

// export session
export default session;