import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Comentarios from './pages/comentarios/comentarios';
import Contatos from './pages/contatos/contatos';
import Fotos from './pages/fotos/fotos';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
