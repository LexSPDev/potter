import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../store/fav/favSlice";

export const CardFavorite = ({el}:{el:any}) => {
  const dispatch = useDispatch();
  const favs = useSelector((state:any) => state.fav)
  const favsData = favs.favoritesItems
  const favName = favsData.map((el: any) => {
    return el.name
  })

  const handleAddToFav = (char:any) =>{
    if(favsData.length === 0){
      dispatch(addToFav(char))
    } else if(!favName.includes(char.name)){
      dispatch(addToFav(char))
    }
  }
  const isFavoriteValidation = () =>{
    console.log(el.name)
    console.log(favName.includes(el.name))
    console.log(favsData)
    return favName.includes(el.name)
  }
  const isFavorite : boolean =isFavoriteValidation();
  useEffect(() => {
    isFavoriteValidation()
  }, [favs])
  
  return (
    <>
      <i className={!isFavorite ? "ph-bookmark-simple" : "ph-bookmark-simple-fill white"} onClick={()=> handleAddToFav(el)}></i>      
    </>
  )
}
