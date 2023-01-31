//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Profile';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import config from '~/config';
//don't need login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile }, //@: kí tự muốn match , sau : ko cố định
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//login->in
const privateRoutes = [];
export { privateRoutes, publicRoutes };
