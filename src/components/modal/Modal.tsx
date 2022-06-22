
export const Modal = ({isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && "isOpen"}`}>
        <div className='modalWrapper'>
            <div>
                <h2>Agrega un personaje</h2>
                <button className='modalClose' onClick={closeModal}>X</button>
            </div>
            <div className="formWrapper">
                <div className="formType">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" />
                </div>
                <div className="formType">
                    <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                    <input type="date" name="fechaNacimiento" />
                </div>
                <div className="formType">
                    <label htmlFor="ojos">Color de ojos</label>
                    <input type="text" name="ojos" />
                </div>
                <div className="formType">
                   <label htmlFor="pelo">Color de pelo</label>
                   <input type="text" name="pelo" />
                </div>
                <div className="formType">
                    <label htmlFor="genero">Genero</label><br />
                    <div className="radioType">
                        <input type="radio" value="Hombre" name="genero" /> Hombre
                        <input type="radio" value="Mujer" name="genero" /> Mujer
                    </div>
                </div>
                <div className="formType">
                    <label htmlFor="posicion">Posición</label><br />
                    <div className="radioType">
                        <input type="radio" value="Estudiante" name="posicion" /> Estudiante
                        <input type="radio" value="Staff" name="posicion" /> Staff
                    </div>
                </div>
            </div>
                <div>
                    <label htmlFor="foto">Fotografia</label>
                    <input type="file" name="foto" />
                </div>
            
            <button>Guardar</button>
        </div>


    </article>
  )
}
