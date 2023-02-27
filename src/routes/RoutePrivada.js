

import { Redirect, Route } from "react-router";


const usuarioT = localStorage.getItem('LoginPage'); 

export default function RoutePrivada({component: Component, ...rest}) {

    

    return (
        
        <Route {...rest}>
        {usuarioT ? <Component/> :<Redirect to="/login-page"/>}
        </Route>
    )
}