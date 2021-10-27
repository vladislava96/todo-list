import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
  const isLoggedIn = false;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <TodoList />
      <SearchPanel />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root'));
