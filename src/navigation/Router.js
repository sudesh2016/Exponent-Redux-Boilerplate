import {
  createRouter
} from '@exponent/ex-navigation';

import Home from '../components/Home';
import Login from '../components/Login';

const Router = createRouter(() => ({
  home: () => Home,
  about: () => Login
}));

export default Router;
