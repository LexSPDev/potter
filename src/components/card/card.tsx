export const Card = ({data}) => {
  return (
  <> {
    data !== null ? (
      data.map((el:any) => (
        <div className="cardProfile alive" key={el.name}>
        <div className={`cardPhoto ${el.house}`}>
          <img src={el.image} alt="nombre" />
        </div>
        <div className="cardData">
          <h2>{el.name}</h2>
          <div className="aliveWrapper">
            <span className="aliveData">{el.alive ? "VIVO": "FINADO"} / {el.hogwartsStaff === false ? "ESTUDIANTE" : "STAFF"}</span>
            <i className="ph-bookmark-simple"></i>
          </div>
          <h2>{el.name}</h2>
          <h4>
            <span>Cumpleaños: </span>
            {el.dateOfBirth}
          </h4>
          <h4>
            <span>Género: </span>
            {el.gender}
          </h4>
          <h4>
            <span>Color de ojos: </span>
            {el.eyeColour}
          </h4>
          <h4>
            <span>Color de pelo: </span>
            {el.hairColour}
          </h4>
        </div>
      </div>
      ))
    ): <h4>No hay datos</h4>
  
  }

  </>
  )
}
