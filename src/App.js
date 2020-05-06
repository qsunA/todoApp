import React from 'react';
import Header from './component/Header';
import MainSection from './component/MainSection';
import TodoProvider from './store/TodoProvider.component';

function App() {
  return (
    <div>
      <TodoProvider>
        <Header/>
        <MainSection/>
      </TodoProvider>
    </div>
  );
}

export default App;
