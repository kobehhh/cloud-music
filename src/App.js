import React from 'react';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import { GlobalStyle } from  './style';

function App() {
  return (
    <HashRouter>
      { renderRoutes (routes) }
    </HashRouter>
  );
}

export default App;
