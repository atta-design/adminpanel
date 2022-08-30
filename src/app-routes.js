import Main from './pages/main/Main';
import Login from './forms/login/Login';
import NewsList from './pages/news/List';
import RulesList from './pages/rules/List';
import UsersList from './pages/users/List';
import Register from './forms/register/Register';


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/users',
    component: UsersList
  },
  {
    path: '/rules',
    component: RulesList
  },
  {
    path: '/news',
    component: NewsList
  }
];

export default routes.map(route => {
  return {
    ...route,
  };
});
