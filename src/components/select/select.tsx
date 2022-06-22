import { useEffect, useState } from "react";
import { getCharacters } from "../../helpers/getCharacters";

export const Select = ({setDb, db}) => {
  const [role,setRole]=useState('');
  const [dbShadow, setDbShadow]= useState(null)
  function isStaff(elemento: any) {
    return elemento.hogwartsStaff === true;
  }
  function isStudent(elemento: any) {
    return elemento.hogwartsStudent === true;
  }
  let api = getCharacters();
  let url = "http://localhost:5000/characters"
  const handleClick = (e: string) => {
    setRole(e)
  }
  useEffect(()=> {
    api.get(url).then((res) =>{
      if(!res.err){
        setDbShadow(res)
      }
    })
  }, [])
  useEffect(()=> {
    let result = []
    if(role === 'staff'){
      result = dbShadow.filter(isStaff)
    } else if(role === 'estudiantes'){
      result = dbShadow.filter(isStudent)
    }
    setDb(result)
  }, [role])
  return (
    <>
    <h2>Selecciona tu filtro</h2>
    <div className="buttonWrapper">
      <button className="btn btnNormal" onClick={() => handleClick('estudiantes')}>ESTUDIANTES</button>
      <button className="btn btnNormal btnActive" onClick={() => setRole('staff')}>STAFF</button>
    </div>
    </>
  )
}
