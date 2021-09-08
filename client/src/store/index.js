import { createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"//instalarlo
//La extensión Redux DevTools muestra un historial de los cambios en el estado de su tienda Redux a lo largo del tiempo. 
//Esto le permite depurar sus aplicaciones de manera efectiva, incluido el uso de técnicas poderosas como la "depuración de viajes en el tiempo".
import thunk from "redux-thunk"
import rootReducer from "../reducer/index";

// El centro de cada aplicación de Redux es la STORE . Es un contenedor que contiene el estado global de su aplicación .

// Una STORE es un objeto de JavaScript con algunas funciones y capacidades especiales que lo hacen diferente a un objeto global simple:

//* Nunca debe modificar o cambiar directamente el estado que se mantiene dentro de la STORE Redux
//* En cambio, la única forma de provocar una actualización del estado es crear un objeto de acción simple que describa "algo que sucedió en la 
//aplicación" y luego enviar la acción a la STORE para decirle lo que sucedió.
//* Cuando se envía una acción, la STORE ejecuta la función de reducción de raíz y le permite calcular el nuevo estado en función del 
//estado anterior y la acción.
//* Finalmente, la STORE notifica a los suscriptores que el estado se ha actualizado para que la UI pueda actualizarse con los nuevos datos.

//La Store tiene la siguientes responsabilidades:
//Mantiene el estado de la aplicación.
//Permite el acceso al estado a través de getState().
//Permite actualizar el estado a través de dispatch(action).
//Registra listeners con subscribe(listener).
//Maneja la desuscripción de listeners.
//Para crear una Store, vamos a usar la función createStore que recibe un reducer como argumento, y opcionalmente el estado inicial de la app.



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//createStore(reducer, [initialState], [enhancer])
//Crea un store de Redux que mantiene el árbol de estado de tu aplicación. Solo debe haber un único store en tu aplicación.
//Argumentos
//1) reducer (Función): Una función reductora que devuelve el siguiente árbol de estado, dado el árbol de estado actual y el una acción.

//2)[initialState] (cualquier cosa): El estado inicial. 
// Puedes opcionalmente especificarlo para hidratar la aplicación con el estado del servidor en aplicaciones universales, 
// o restaurar una sesión anterior serializada. Si crear el reducer con combineReducers,
// este debe ser un objeto plano con la misma forma usada ahí. De otra forma, eres libre de pasar cualquier cosa que el reducer pueda entender.

//3)[enhancer] (Función): El potenciador del store. Puedes opcionalmente especificarlo para mejorar el store con funcionalidad de terceros como
//los middlewares, time travel, persistencia, etc. El único potenciador de store que viene con Redux es applyMiddleware().



//*applyMiddleware(...middleware)
//Middleware es la forma sugerida de extender Redux con funcionalidad personalizada. Middleware le permite ajustar el dispatch método de la tienda 
//para divertirse y obtener ganancias. La característica clave del middleware es que se puede componer. 
//Se pueden combinar varios middleware juntos, donde cada middleware no requiere conocimiento de lo que viene antes o después de él en la cadena.

//*Redux-thunk te permite escribir creadores de acciones que retornan una función en vez de un objeto de acción típico.
//Es una libreríaque nos permite realizar operaciones asincrónicas en nuestros action creators.
// Entonces, el *thunk puede ser usado para retrasar el envío de una acción hasta que se cumpla una línea de código asíncrona.
//Paso a paso de un proceso con Redux-Thunk:
//-Verificar la acción entrante: Si es una acción regular, redux-thunk no hace nada y la acción es procesada por el reducer del Store.
//-Si la acción es una función: Redux-thunk la invoca y usa los métodos dispatch y getState y cualquier argumento adicional.
//-Después que la función se ejecute:El thunk envía la acción, la cual actualizará el estado como corresponde.
//En otras palabras, un redux-thunk está compuesto de un “creador thunk” (creador de acciones asincrónicas) y “el mismo thunk” el cual es la función
// que devuelve el “creador Thunk” y acepta el dispatch y setState como argumentos.






