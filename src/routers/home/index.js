import { HOME_PATH } from '../../constants/path';
import { loadable } from '../../utils/router';

export default {
    path: HOME_PATH,
    component: loadable(() => import('./home'))
}
