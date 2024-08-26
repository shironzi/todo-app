import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MyForm from './components/MyForm.js';
import AddButton from './components/AddButton.js';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <MyForm />
      <AddButton/>
    </div>
  );
}

export default App;
