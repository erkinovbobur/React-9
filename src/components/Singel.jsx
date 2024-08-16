
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import "../components/Singel.css"
 const singel = () => {
 
  const {id} = useParams();
  const recipe = useFetch(`/recipes/${id}`)
  console.log(recipe)
  
 
  return (
    
    <div className="Stile grid gap-2 grid-cols-1 rounded-lg hover:bg-red-600 transition-all ">
  <div className='flex justify-center'> 
  <img className="w-[500px]  h-[400px] rounded-lg border-4 border-red-500 shadow-lg object-fill" src={recipe.image} alt={recipe.name} />
    </div> 
   
    <div className="mt-4 space-y-2">
    <h1 className="text-2xl font-bold text-blue-500">Name: {recipe.name}</h1>
    <h2 className="text-xl">Ingredients: {recipe.ingredients}</h2>
      <h2 className="text-xl ">Instructions: {recipe.instructions}</h2>
    </div>
  </div>
  
    
  )
}
export default singel