import { Redirect, Route } from "react-router";

 const usuarioT = localStorage.getItem('LoginPage'); 


export default function RoutePublica({component: Component, ...rest}) {

    

    return (
        
        <Route {...rest}>
        {usuarioT? <Redirect to="/landing-page"/> : <Component/>}
        </Route>
    )
}