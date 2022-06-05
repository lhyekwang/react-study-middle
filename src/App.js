import React , { useEffect } from 'react';
import Search from './search/container/Search';
import User from './user/container/User';
import Login from './auth/container/Login';
import Signup from './auth/container/Signup';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import { actions } from './auth/state';

export default function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0];
    const loadingEl = document.getElementById('init-loading');
    bodyEl.removeChild(loadingEl);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchUser())
  }, [dispatch]);  
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
}
