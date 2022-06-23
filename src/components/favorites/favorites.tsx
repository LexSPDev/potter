import { useFav } from "../../hooks/useFav"
import { FavoritesList } from "../FavoritesList"

export const Favorites = () => {
  const [isOpenFav, openFav] = useFav(false)
  const handleClick = () => {
    openFav()
  }
  return (
    <>
      <button className="centerWrapperRow btnPrimer" onClick={handleClick}>
        <span>
          FAVORITOS
        </span>
        <i className="ph-bookmark-simple-fill white"></i>
      </button>
      <FavoritesList isOpen={isOpenFav}/>
    </>
  )
}
