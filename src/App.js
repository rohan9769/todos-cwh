import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const todos = [
    {
      sno:1,
      title:"Buy grocery",
      desc:"Go to mall and buy grocery"
    },
    {
      sno:2,
      title:"Buy drink",
      desc:"Go to mall and buy drink"
    },
    {
      sno:3,
      title:"Buy Chips",
      desc:"Go to mall and buy chips"
    },
  ]
  return (
    <div>
      <Header title="Todo List Application" searchBar={false}></Header>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
