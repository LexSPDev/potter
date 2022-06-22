import { Card } from "../components/card/card"
import { Favorites } from "../components/favorites/favorites"
import { Header } from "../components/header/header"
import { Select } from "../components/select/select"
import { Add } from "../components/add/add"
import { useEffect } from "react"
import { getCharacters } from "../helpers/getCharacters"

export const Home = () => {
  useEffect(()=> {
    getCharacters()
  }, [])
  return (
    <div className="mainWrapper">
        <div className="favWrapper">
          <Favorites></Favorites>
          <Add></Add>
        </div>

        <Header></Header>
        <Select></Select>
        <div className="cardWrapper">
          <Card></Card>
        </div>
    </div>
  )
}
