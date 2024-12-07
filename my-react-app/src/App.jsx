// Componente pai
import './App.css'

// Importar o componente filho
import FunctionalComponents from './componentes/FunctionalComponents';
import ClassComponent from './componentes/ClassComponent';
import PropsExample from './componentes/PropsExample';

function App() {
  
  return (
    <>
      <h1>Hello World React</h1>
      {/* utilizando o componente importado no JSX  */}
      <FunctionalComponents />
      <ClassComponent />
      <PropsExample nome="Naju" idade={22}/>
    </>
  )
}

export default App

