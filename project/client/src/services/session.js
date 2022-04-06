import router from '../router/index.js';
import { Login } from './users.js';
import { CheckOrgID } from './users.js'

const session = {
    user: null,
    async login(username, password) {

        let user_res = await Login(username, password);

        this.user = user_res;

        // redirect page to home page
        router.push('/');

    },
    async GetOrgID(id) {
        console.log("user_id:" + this.user.userID);
        return await CheckOrgID(id);
    },
}

// export session
export default session;