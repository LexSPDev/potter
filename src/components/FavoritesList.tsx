import { useDispatch } from 'react-redux';
import { delToFav } from '../store/fav/favSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export const FavoritesList = ({isOpen}:{isOpen:boolean}) => {
  const favs = useSelector((state:any) => state.fav)
  const favsData = favs.favoritesItems
  const favsLenght = favs.favoritesItems.length
  const dispatch = useDispatch();
  const handleDelToFav = (char: object) =>{
    dispatch(delToFav(char))
  }
  return (
        <div className={`favoriteList ${isOpen && "isOpen"}`}>    
            {favsLenght === 0 ? <h2>Aun no tienes ningun favorito</h2> :
            favsData.map( (el: any) => 
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
