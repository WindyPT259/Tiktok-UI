//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Profile';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';
//don't need login
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile }, //@: kí tự muốn match , sau : ko cố định
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//login->in
const privateRoutes = [];
export { privateRoutes, publicRoutes };
