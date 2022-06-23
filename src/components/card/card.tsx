import { useDispatch } from "react-redux"
import { addToFav } from "../../store/fav/favSlice";
import { CardFavorite } from "./cardFavorite";

export const Card = ({data}:{data:Array<Object>}) => {
  const movil = screen.width < 600 ? true : false
  return (
  <> {
    
    data !== null ? (
      data.map((el:any) => (
        <div className={el.alive ? "cardProfile alive" : "cardProfile dead"} key={el.name}>
        <div className={`cardPhoto ${el.house}`}>
          <img src={el.image} alt="nombre" />
        </div>
        <div className="cardData">
          {movil && <div className="nombreMovil" > <span className="nombre">{el.name}</span></div> }
          <div className="aliveWrapper">
            <span className="aliveData">{el.alive ? "VIVO": "FINADO"} / {el.hogwartsStaff === false ? "ESTUDIANTE" : "STAFF"}</span>

            <CardFavorite el={el}/>
          </div>
          {!movil && ( <span className="nombre">{el.name}</span> )}
          {!movil && ( <h4><span>Cumpleaños: </span>{el.dateOfBirth ? el.dateOfBirth : "Unknown date"}</h4> )}
          {!movil && ( <h4><span>Género: </span>{el.gender ? el.gender : "Unknown gender"}</h4> )}
          {!movil && ( <h4><span>Color de ojos: </span>{el.eyeColour ? el.eyeColour : "Unknown colour"}</h4> )}
          {!movil && ( <h4><span>Color de pelo: </span>{el.hairColour ? el.hairColour : "Unknown colour"}</h4> )}
        </div>
      </div>
      ))
    ): <h4>No hay datos</h4>
  
  }

  </>
  )
}
