import { Card } from "../components/card/card"
import { Favorites } from "../components/favorites/favorites"
import { Header } from "../components/header/header"
import { Select } from "../components/select/select"
import { Add } from "../components/add/add"
import { useEffect, useState } from "react"
import { getCharacters } from "../helpers/getCharacters"

export const Home = () => {
  const [db, setDb]= useState(null)
  let api = getCharacters();
  let url = "http://localhost:5000/characters"
  useEffect(()=> {
    api.get(url).then((res) =>{
      if(!res.err){
        setDb(res)
      }
    })
  }, [])
  return (
    <div className="mainWrapper">
        <div className="favWrapper">
          <Favorites></Favorites>
          <Add data={db} url={url} setDb={setDb}></Add>
        </div>

        <Header></Header>
        <Select setDb={setDb} db={db}></Select>
        <div className="cardWrapper">
          <Card data={db}></Card>
        </div>
    </div>
  )
}
