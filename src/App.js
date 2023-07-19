import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
function App() {
  return (

    <div>
      <section className='hero is-warning has-text-centered'>
        <nav className='hero-body'>
          <NavBar/>
        </nav > 
          <ItemListContainer greeting={'Bienvenidos'}/>
      </section>
    </div>
  );
}

export default App;
