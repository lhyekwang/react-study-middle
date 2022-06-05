import React from 'react';
import Search from './search/container/Search';
import User from './user/container/User';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';

export default function App() {
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
    </>
  );
}
