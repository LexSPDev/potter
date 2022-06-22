import { useState } from "react";
import { getCharacters } from "../../helpers/getCharacters";

const initailForm =    {
        "name": "",
        "species": "",
        "gender": "",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": 0,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
            "wood": "",
            "core": "",
            "length": 0
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": true,
        "actor": " ",
        "alive": true,
        "image": "",
        "role": ""
    };

export const Modal = ({isOpen, closeModal,data,url,setDb}) => {
    const [form, setForm] = useState(initailForm);
    let api = getCharacters();

    const createData =(newData: any)=> {
        newData.id = Date.now();
        const options = {
            body: newData,
            headers: { "content-type": "application/json" },
        }
        api.post(url,options).then((res)=> {
        if(!res.err){
            setDb([...data, res ])
        } else {
            console.log(res)
        }
        })
      }
      const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        console.log(form)
        if(form.role === 'Estudiante'){
            form.hogwartsStudent = true;
            form.hogwartsStaff = false
        } else {
            form.hogwartsStudent = false;
            form.hogwartsStaff = true
        }
    
        if (!form.name || !form.gender || !form.dateOfBirth || !form.eyeColour || !form.hairColour ) {
          alert("Datos incompletos");
          return;
        }
        createData(form);
        setForm(initailForm);
        closeModal();
    };

  return (
    <article className={`modal ${isOpen && "isOpen"}`}>
        <div className='modalWrapper'>
            <div className="tituloPersonaje">
                <h2>Agrega un personaje</h2>
                <button className='modalClose' onClick={closeModal}>X</button>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="formWrapper">
                <div className="formType">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" 
                            name="name"             
                            onChange={handleChange}
                            value={form.name}/>
                </div>
                <div className="formType">
                    <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
                    <input type="date" 
                            name="dateOfBirth"           
                            onChange={handleChange}
                            value={form.dateOfBirth}/>
                </div>
                <div className="formType">
                    <label htmlFor="eyeColour">Color de ojos</label>
                    <input type="text" 
                            name="eyeColour"           
                            onChange={handleChange}
                            value={form.eyeColour}/>
                </div>
                <div className="formType">
                   <label htmlFor="hairColour">Color de pelo</label>
                   <input type="text" 
                            name="hairColour"           
                            onChange={handleChange}
                            value={form.hairColour}/>
                </div>
                <div className="formType">
                    <label htmlFor="gender">Genero</label><br />
                    <div className="radioType">
                        <input type="radio" 
                                value="Hombre" 
                                name="gender" 
                                onChange={handleChange}
                                /> Hombre
                        <input type="radio" 
                                value="Mujer" 
                                name="gender" 
                                onChange={handleChange}
                                /> Mujer
                    </div>
                </div>
                <div className="formType">
                    <label htmlFor="posicion">Posición</label><br />
                    <div className="radioType">
                        <input type="radio" 
                                value="Estudiante" 
                                name="role" 
                                onChange={handleChange}
                                /> Estudiante
                        <input type="radio" 
                                value="Staff" 
                                name="role" 
                                onChange={handleChange}
                                /> Staff
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="foto">Fotografia</label>
                <input type="file" name="foto" />
            </div>
            <div className="btnWrapper">

            <button type="submit" className="buttonSave">Guardar</button>
            </div>
        </form>     
        </div>


    </article>
  )
}
