import { useDispatch } from 'react-redux';
import { delToFav } from '../store/fav/favSlice';
import { useSelector } from 'react-redux';
export const FavoritesList = ({isOpen, closeFav}) => {
  const favs = useSelector((state) => state.fav)
  const dispatch = useDispatch();
  const handleDelToFav = (char) =>{
    console.log(char)
    dispatch(delToFav(char))
  }
  return (
        <div className={`favoriteList ${isOpen && "isOpen"}`}>    
            {
            favs.favoritesItems?.map( (el: any) => 
              <div className='favoriteItem' key={el.name}>
                <img src={el.image} alt={el.name} />
                <span>{el.name}</span>
                <i className="ph-trash white" onClick={() => handleDelToFav(el)}></i>
              </div>  
            )
            }     
        </div>
  )
}
