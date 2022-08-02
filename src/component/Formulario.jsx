import { useState } from 'react'
import leabeDynamic from '../tools/form'

const Formulario = () => {
  const { person, setPerson } = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className='icon-center'>
        <h6 className='sub-title pg-l'>Registro de clientes</h6>
        <span className='material-symbols-outlined'>person_add</span>
      </div>

      <form onChange={leabeDynamic} onSubmit={formSubmit} className='container-form' id='label-dynamic' autoComplete='off'>
        <fieldset>
          <div className='icon-center'>
            <span className='material-symbols-outlined icon-size-s'>face</span>
            <legend>Perfil</legend>
          </div>
          <div>
            <label htmlFor='full-name'>Nombre completo</label>
            <input type='text' name="full-name" id='full-name' />
          </div>
          <div>
            <label htmlFor="full-last-name">Apellido completo</label>
            <input type='text' name="full-last-name" id='full-last-name' />
          </div>
          <div>
            <label htmlFor="gender">Genero</label>
            <select name='gender' id='gender'>
              <option></option>
              <option value='hombre'>Hombre</option>
              <option value='mujer'>Mujer</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className='icon-center'>
            <span className='material-symbols-outlined icon-size-s'>call</span>
            <legend>Contactos</legend>
          </div>
          <div>
            <label htmlFor='number-phone'>Teléfono</label>
            <input type='tel' name='number-phone' id='number-phone' />
          </div>
          <div>
            <label htmlFor='number-phone-secundary'>Teléfono secundario</label>
            <input type='tel' name='number-phone-secundary' id='number-phone-secundary' />
          </div>
          <div>
            <label htmlFor='number-conventional'>Convencional</label>
            <input type='tel' name='number-conventional' id='number-conventional' />
          </div>
          <div>
            <label htmlFor='number-conventional-secundary'>Convencional secundario</label>
            <input type='tel' name='number-conventional-secundary' id='number-conventional-secundary' />
          </div>
        </fieldset>
        <fieldset>
          <div className='icon-center'>
            <span className='material-symbols-outlined icon-size-s'>person_pin</span>
            <legend>Dirección</legend>
          </div>
          <div>
            <label htmlFor='main-street'>Calle principal</label>
            <input type='text' name="main-street" id='main-street' />
          </div>
          <div>
            <label htmlFor="side-street">Calle secundaria</label>
            <input type='text' name='side-street' id='side-street' />
          </div>
          <div>
            <label htmlFor='bonus-details'>Detalles extras</label>
            <textarea name='bonus-details' id='bonus-details' />
          </div>
        </fieldset>
        <input type='submit' value="Añadir" />
      </form>                
    </div>
  )
}

export default Formulario