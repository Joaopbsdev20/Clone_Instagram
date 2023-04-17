import './App.css';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo';



function App() {
  return (
    <div className="App">
      <div className='LadoEsquerdo'>
        <LadoEsquerdo />
      </div>

      <div className='Centro'>

        <Stories />
        
        <Feed />
      </div>

      <div className='LadoDireito'>
        Lado Direito
      </div>
    </div>
  );
}

export default App;
