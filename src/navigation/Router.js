import {
  createRouter
} from '@exponent/ex-navigation';
import Home from '../components/Home';

const Router = createRouter(() => ({
  home: () => Home
}));

export default Router;
