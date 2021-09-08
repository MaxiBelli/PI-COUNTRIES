//App.js: el componente principal de la aplicación.
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"//
import LandingPage from "./components/LandingPage"//
import Home from "./components/Home"//
import ActivityCreate from './components/ActivityCreate';
import Detail from './components/Detail';

//*React Router: sirve para mantener sincronizados tu UI con la url de una forma declarativa.
//Nos ayuda en el ruteo interno en el front-end, es decir, el trabajo de mapear cada link con algún Componente.

//*react-router-dom: contiene los componentes basicos de react-router mas componentes extras. 
//Lo que nos da son una serie de Componentes, los cuales van a recibir ciertas props que le van cambiar el comportamiento. 
//La idea entonces será tener un Componente principal(APP) que se va a cargar en nuestra página (la única que vamos a tener), 
//y este se encargará de llamar a nuestro Componentes que queramos mostrar según a donde navegue el usuario. 

//*BrowserRouter: Primero vamos a envolver todo en este Componente llamador. es más utilizado en servidores que manejan peticiones dinámicas 
//Este inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, etc.
//Dentro de este, vamos a agregar nuestras rutas usando <Route>.
//*<Route>, componente para crear nuestras rutas a otros páginas (componentes).
//A este Componente hay que pasarle dos propiedades:
//path: Es el path de la url que va a activar esta ruta.
//component: Es el componente que se va a cargar cuando ingresemos a la ruta definida en el path.
//exact: Agregamos esta keyword para que matchee exactamente con el path que le pasamos. Este parametro entra en juego cuando tenemos path anidados.

//Switch: Este componente es el encargado de que solo se renderice el primer hijo Route o Redirect que coincide con la ubicación.
// Si no se usa este componente todos los componentes Route o Redirect se van a renderizar mientras cumplan con la condición establecida.

//Redirect: Con este componente podemos causar un redireccionamiento a una ruta diferente a la ruta actual reemplazando el location actual 
//y el historial de navegación. Tiene las siguientes propiedades.
//From: le pasamos un string u object para indicarle desde donde se va hacer el redireccionamiento.
//To: le pasamos un string u object hacia dónde vamos a realizar el redireccionamiento.
//Push: si es verdadero no modifica el location del historial por el contrario agrega esta nueva locación al historial.

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path= "/" component= {LandingPage}/>
       <Route path= "/countries" component= {Home}/>
       <Route path= "/details/:id" component= {Detail}/>
       <Route path= "/activity" component= {ActivityCreate}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
