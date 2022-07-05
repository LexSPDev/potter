import { useEffect, useState } from "react";
import { getCharacters } from "../../helpers/getCharacters";

export const Select = ({setDb}:{setDb:Function}) => {
  const [role,setRole]=useState('');
  const [search,setSearch]=useState('');
  const [status,setStatus]=useState('');
  const [dbShadow, setDbShadow]= useState([] as object[])
  function isStaff(elemento: any) {
    return elemento.hogwartsStaff === true;
  }
  function isStudent(elemento: any) {
    return elemento.hogwartsStudent === true;
  }
  function isAlive(elemento: any) {
    return elemento.alive === true;
  }
  function isDead(elemento: any) {
    return elemento.alive === false;
  }
  let api = getCharacters();
  let url = "http://localhost:5000/characters"
  const handleClick = (e: string) => {
    if(e === 'posicion'){ setStatus('')}
    if(e === 'status'){ setRole('')}
    console.log(e)
    setSearch(e)
  }
  const handleClickPosition = (e:string) => {
    setRole(e)
  }
  const handleClickStatus = (e:string) => {
    setStatus(e)
  }
  useEffect(()=> {
    api.get(url).then((res) =>{
      if(!res.err){
        setDbShadow(res)
      }
    })
  }, [])
  useEffect(()=> {
    console.log('hola')
    if(dbShadow !== null){
      setDb(dbShadow)
    }
  }, [search])
  useEffect(()=> {
    let result : object[] = []
    if(dbShadow !== null){
      if(role === 'staff'){
        result = dbShadow.filter(isStaff)
      } else if(role === 'estudiantes'){
        result = dbShadow.filter(isStudent)
      }
      setDb(result)
    }
  }, [role])
  useEffect(()=> {
    let result : object[] = []
    if(dbShadow !== null){
      if(status === 'vivo'){
        result = dbShadow.filter(isAlive)
        console.log(result)
      } else if(status === 'finado'){
        result = dbShadow.filter(isDead)
      }
      setDb(result)
    }
  }, [status])
  return (
    <>
    <h2>Selecciona tu filtro</h2>
    <div className="buttonWrapper">
      <button className={search === 'posicion' ? "btn btnNormal btnActive" : "btn btnNormal"} onClick={() => handleClick('posicion')}>POSICION</button>
      <button className={search === 'status' ? "btn btnNormal btnActive" : "btn btnNormal"} onClick={() => handleClick('status')}>STATUS</button>
    </div>
    {search === 'posicion' &&
    <div className="buttonWrapper">
      <button className={role === 'estudiantes' ? "btn btnNormal btnActive" : "btn btnNormal"} onClick={() => handleClickPosition('estudiantes')}>ESTUDIANTES</button>
      <button className={role === 'staff' ? "btn btnNormal btnActive" : "btn btnNormal"} onClick={() => handleClickPosition('staff')}>STAFF</button>
    </div>
    }
    {search === 'status' &&
    <div className="buttonWrapper">
      <button className={status === 'vivo' ? "btn btnNormal btnActive" : "btn btnNormal"} onClick={() => handleClickStatus('vivo')}>VIVO</button>
      <button className={status === 'finado' ? "btn btnNormal btnActive" : "btn btnNormal"} onClick={() => handleClickStatus('finado')}>FINADO</button>
    </div>
  }
    </>
  )
}
