import { useRoutes } from "react-router-dom"
import { Suspense, lazy } from "react"

const Recipes = lazy(() => import("./Recipes"))
const Singel = lazy(() => import("./Singel"))
const RouteController  = () => {
  return useRoutes([

{
    path: "",
    element: <Suspense falback={<p>Loading...</p>}><Recipes/></Suspense>
},
{
    path: "singel/:id",
    element: <Suspense falback={<p>Loading...</p>}><Singel/></Suspense>

}
  ]
 
  )
}

export default RouteController