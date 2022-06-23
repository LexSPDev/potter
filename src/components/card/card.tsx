import { useDispatch } from "react-redux"
import { addToFav } from "../../store/fav/favSlice";

export const Card = ({data}:{data:Array<Object>}) => {
  const dispatch = useDispatch();
  let favorites= [''];
  const handleAddToFav = (char:any) =>{
    if(favorites.length === 0){
      dispatch(addToFav(char))
      favorites.push(char.name)
    } else if(!favorites.includes(char.name)){
      dispatch(addToFav(char))
      favorites.push(char.name)
    }
    favorite(char.name)
  }
  const favorite = (name: string) => {
    return favorites.includes(name)
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
            { !favorite(el.name) ? (
              <i className="ph-bookmark-simple" onClick={()=> handleAddToFav(el)}></i>
              ) : (
                <i className="ph-bookmark-simple-fill white"></i>
            )}
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
