import { useDispatch, useSelector } from "react-redux"
import { addToFav } from "../../store/fav/favSlice";

export const Card = ({data}) => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav)
  const handleAddToFav = (char) =>{
    dispatch(addToFav(char))
  }
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
          {movil && <span className="nombre">{el.name}</span>}
          <div className="aliveWrapper">
            <span className="aliveData">{el.alive ? "VIVO": "FINADO"} / {el.hogwartsStaff === false ? "ESTUDIANTE" : "STAFF"}</span>
            
            {<i className="ph-bookmark-simple" onClick={()=> handleAddToFav(el)}></i>}
          </div>
          {!movil && ( <span className="nombre">{el.name}</span> )}
          {!movil && ( <h4><span>Cumpleaños: </span>{el.dateOfBirth}</h4> )}
          {!movil && ( <h4><span>Género: </span>{el.gender}</h4> )}
          {!movil && ( <h4><span>Color de ojos: </span>{el.eyeColour}</h4> )}
          {!movil && ( <h4><span>Color de pelo: </span>{el.hairColour}</h4> )}
        </div>
      </div>
      ))
    ): <h4>No hay datos</h4>
  
  }

  </>
  )
}
