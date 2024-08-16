
import { Link } from "react-router-dom";
import {useFetch} from "../hooks/useFetch"
import "../components/Recipes.css"

 const Recipes = () => {
  const recipes = useFetch("/recipes");
 return (
   <div className="Menu  ">
   <h1 className="text-center text-neutral-50  underline text-2xl font-bold">Menu</h1>
 
    { recipes.map((recipe) => (
        <div className=" flex justify-center ">
     <div key={recipe.id}>
      <div className="List text-neutral-50 text-center list-disc " >
      <Link to={`/singel/${recipe.id}`}><h3 className=" ">{recipe.name}</h3></Link> 
      </div>
   
    </div>
        </div>
   
    ))
  }
</div>
  )
}


export default Recipes
