import { Card } from "../components/card/card"
import { Header } from "../components/header/header"
import { Select } from "../components/select/select"
export const Home = () => {
  return (
    <div className="mainWrapper">
        <Header></Header>
        <Select></Select>
        <div className="cardWrapper">
          <Card></Card>
        </div>
    </div>
  )
}
