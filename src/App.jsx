import './App.css'
import Formulario from './component/Formulario'
import Detalles from './component/Detalles'

function App() {
  return (
    <>
      <h1 className='title text-center mg-b'>Herramienta de administración</h1>
      <div className='container-tool-admin'>
        <Formulario/>
        <Detalles/>
      </div>
    </>
  )
}

export default App
