
import { Link } from "react-router-dom";
import {useFetch} from "../hooks/useFetch"
import "../components/Recipes.css"

 const Recipes = () => {
  const recipes = useFetch("/recipes");
 return (
   <div className="Menu grid grid-cols-2   gap-x-1 text-neutral-50 ">
   <h1 className="text-center ">Menu</h1>
    { recipes.map((recipe) => (
    <div key={recipe.id}>
      <div className="List text-neutral-50  " >
      <Link to={`/singel/${recipe.id}`}><h3 className=" ">{recipe.name}</h3></Link> 
      </div>
   
    </div>
    ))
  }
</div>
  )
}


export default Recipes
