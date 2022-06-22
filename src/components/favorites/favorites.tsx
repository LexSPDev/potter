import { useFav } from "../../hooks/useFav"
import { FavoritesList } from "../FavoritesList"

export const Favorites = () => {
  const [isOpenFav, openFav, closeFav] = useFav(false)
  return (
    <>
      <button className="centerWrapperRow" onClick={openFav}>
        <span>
          FAVORITOS
        </span>
        <i className="ph-bookmark-simple-fill white"></i>
      </button>
      <FavoritesList isOpen={isOpenFav} closeFav={closeFav}/>
    </>
  )
}
