import { useRoutes } from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"
import Payment from '../pages/payment'


const rounting = (props) => {
    return [
        {index: true, path:'/login', element:<Login {...props} title="login"/>,},
        {index: true, path:'/register', element:<Register {...props} title="register"/>,},
        // {index: true, path:'/payment', element:<Payment {...props} title="Payment"/>,},
        {index: true, path:'*', element:<div>Page Not Found</div>},
    ]
}


const PublicAuthorized = (props) => {
    const routes = useRoutes(rounting(props))
    return routes
}

export default PublicAuthorized