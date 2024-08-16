
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
 const singel = () => {
 
  const {id} = useParams();
  const recipe = useFetch(`/recipes/${id}`)
  console.log(recipe)
  
 
  return (
    <div className='grid gap-4 grid-cols-1 grid-rows-1'><img className='w-[300px] ' src={recipe.image} alt="" />
    <h1>Name: {recipe.name}</h1>
    <h2>Ingredients: {recipe.ingredients}</h2>
    <h2>Instructions: {recipe.instructions}</h2>
    
    
    </div>
    
  )
}
export default singel