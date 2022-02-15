import { LOGIN_PATH } from '../../constants/path';
import { loadable } from '../../utils/router';

export default {
    path: LOGIN_PATH,
    component: loadable(() => import('./login'))
}