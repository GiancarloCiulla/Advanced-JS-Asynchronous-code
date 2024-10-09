//RESUELVE TUS EJERCICIOS AQUI
/*
1.- Declara una funcion getAllBreeds que devuelva un array 
de strings con todas las razas de perro.
*/
function getAllBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all';

    let resultado = fetch(url)
        .then(response => response.json())
        .then(data => {
            // obtenemos todas las claves del valor 'data.message'
            let razasPerro = Object.keys(data.message);
            return razasPerro;
        })
        .catch(error => {
            return []; // devolvemos un array vacio
        });
        return resultado;
}
// Una vez se resuelve fetch(), devuelve el resultado
getAllBreeds().then(razas => { // -> leer Explicación
    console.log("Ejercicio 1");
    console.log(razas);
    console.log("****************");
});

/*
Explicación:
getAllBreeds().then(razas => {...})
Se ejecuta cuando la promesa ha sido resuelta (es decir, cuando la 
operación asíncrona termina exitosamente). 
En este caso, una vez que getAllBreeds() ha completado su tarea y ha 
obtenido los datos, el callback (la función flecha razas => {...}) se ejecuta.
*/


/*
2.- Declara una función getRandomDog que obtenga una 
imagen random de una raza.
*/
function getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    let resultado = fetch(url)
        .then(response => response.json())
        .then(data => {
            // obtenemos todas las claves del valor 'data.message'
            let imagenRandomRaza = data.message;
            return imagenRandomRaza;
        })
        .catch(error => {
            return ""; // devolvemos un array vacio
        });
        return resultado;
}
// Una vez se resuelve fetch(), devuelve el resultado
getRandomDog().then(imagen => {
    console.log("Ejercicio 2");
    console.log(imagen);
    console.log("****************");
});


/*
3.- Declara una función getAllImagesByBreed que obtenga todas 
las imágenes de la raza komondor.
*/
function getAllImagesByBreed() {

    const url = 'https://dog.ceo/api/breed/komondor/images';

    let resultado = fetch(url)
        .then(response => response.json())
        .then(data => {
            // obtenemos todas las claves del valor 'data.message'
            let imagenesPorRazaKomondor = Object.values(data.message);
            return imagenesPorRazaKomondor;
        })
        .catch(error => {
            return []; // devolvemos un array vacio
        });
        return resultado;
}
// Una vez se resuelve fetch(), devuelve el resultado
getAllImagesByBreed().then(imgRzKomodor => {
    console.log("Ejercicio 3");
    console.log(imgRzKomodor);
    console.log("****************");
});


/*
4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva 
las imágenes de la raza pasada por el argumento
*/
function getAllImagesByBreed2(breed) {

    const url = `https://dog.ceo/api/breed/${breed}/images`;

    let resultado = fetch(url)
        .then(response => response.json())
        .then(data => {
            // obtenemos todas las claves del valor 'data.message'
            let imagenPorRaza = Object.values(data.message);;
            return imagenPorRaza;
        })
        .catch(error => {
            return []; // devolvemos un array vacio
        });
        return resultado;
}
// Una vez se resuelve fetch(), devuelve el resultado
getAllImagesByBreed2('african').then(imgRaza => {
    console.log("Ejercicio 4");
    console.log(imgRaza);
    console.log("****************");
});


/*
5.- Declarara una función getGitHubUserProfile(username) que obtenga 
el perfil de usuario de github a partir de su nombre de usuario. 
(https://api.github.com/users/{username})
*/
// 5. Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario

function getGitHubUserProfile(username) {
    const url = `https://api.github.com/users/${username}`;
    let result = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let nameUsuario = data;
        return nameUsuario;
      })
      .catch((error) => {
        return;
      });
    return result;
  }
  console.log(
    getGitHubUserProfile("alenriquez96").then((perfil) => {
      console.log(perfil.name);
    })
  );
  // 6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username),
  // retorne {img, name} y pinte la foto y el nombre en el DOM.
  
  function printGithubUserProfile(username) {
    const result = getGitHubUserProfile(username)
                    .then(data => {
                      let img = data.avatar_url1;
                      let name = data.name;
                      
                      // pintar en el DOM (hecho al final)
  
                      return { img, name };
                    })
                    .catch((error) => {
                      return;
                    });
    return result;
  }
  
  printGithubUserProfile("alenriquez96").then((usuario) => {
    const imgElement = document.createElement("img");
    imgElement.src = usuario.img;
    imgElement.alt = `Avatar de ${usuario.name}`;
  
    const nameElement = document.createElement("h3");
    nameElement.textContent = usuario.name;
  
    const container = document.getElementById("ejercicio 6");
    container.innerHTML = "";
    container.appendChild(imgElement);
    container.appendChild(nameElement);
  
    console.log(usuario.img);
  });

/*
6.- Declara una función printGithubUserProfile(username) que reciba 
como argumento el nombre de un usuario (username), retorne 
{img, name} y pinte la foto y el nombre en el DOM.
*/
function printGithubUserProfile(username) {
    const url = `https://api.github.com/users/${username}`;

    let resultado = fetch(url)
        .then(response => response.json())
        .then(data => {
            // obtenemos los valores de data.name y data.avatar_url
            let name = data.name;
            let img = data.avatar_url;

            return {img, name};
        })
        .catch(error => {
            console.error('Error al conectar:', error);
            const container = document.getElementById('ejercicio_6');
            container.innerHTML = 'Error al cargar el perfil de usuario'; // Mensaje de error en el DOM
        });
        return resultado;
}
// Una vez se resuelve fetch(), devuelve el resultado
printGithubUserProfile('alenriquez96').then(perfil => {
    console.log("Ejercicio 6");
    const imgElement = document.createElement('img');
    imgElement.src = perfil.img;
    imgElement.alt = `Avatatar de ${perfil.name}`;

    const nameElement = document.createElement('h3');
    nameElement.textContent = perfil.name;

    // añadimos los elementos en el DOM
    const container = document.getElementById('ejercicio_6');
    container.innerHTML = '';
    container.appendChild(imgElement);
    container.appendChild(nameElement);
    console.log("****************");
});


/*
7. Crea una función getAndPrintGitHubUserProfile(username) que contenga 
una petición a la API para obtener información de ese usuario y devuelva 
un string que represente una tarjeta HTML como en el ejemplo, la estructura 
debe ser exactamente la misma:
<section>
    <img src="url de imagen" alt="imagen de usuario">
    <h1>Nombre de usuario</h1>
    <p>Public repos: (número de repos)</p>
</section>
*/
function getAndPrintGitHubUserProfile(username) {
    const url = `https://api.github.com/users/${username}`;

    let resultado = fetch(url)
        .then(response => {
            if (!response.ok) {
                // si la respuesta no devuelve un ok
                throw new Error(`Usuario no encontrado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // obtenemos los valores de data.name y data.avatar_url
            let name = data.name;
            let img = data.avatar_url;
            let public_repos = data.public_repos;

            let cadena = `
                <section>
                    <img src="${img}" alt="${name}">
                    <h1>${name}</h1>
                    <p>Public repos: ${public_repos}</p>
                </section>
            `;
            return cadena;
        })
        .catch(error => {
            console.error('Error al conectar:', error);
            const container = document.getElementById('ejercicio_7');
            container.innerHTML = 'Error al cargar el perfil de usuario'; // Mensaje de error en el DOM
        });
        return resultado;
}
getAndPrintGitHubUserProfile('alenriquez96').then(datosUsuario => {
    console.log("Ejercicio 7");

    // añadimos el reasultado al DOM
    const container = document.getElementById('ejercicio_7');
    container.innerHTML = datosUsuario;
    console.log("****************");
});


/*
8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. 
El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. 
Después llamaremos a la función getAndPrintGitHubUserProfile(username) que se 
ejecute cuando se pulse el botón buscar.(Esto no se testea)
*/
document.getElementById('btn_buscarUsuario').addEventListener('click', function() {
    const userValue = document.getElementById('usuario').value.trim();

    // validamos que el campo 'usuario' no este vacio
    if (userValue != "") {
        getAndPrintGitHubUserProfile(userValue).then(datosUsuario => {
            console.log("Ejercicio 8");
        
            // añadimos el reasultado al DOM
            const container = document.getElementById('ejercicio_8');
            container.innerHTML = datosUsuario;
            console.log("****************");
        });

    } else {
        document.getElementById('ejercicio_8').innerHTML = `
            <label>Por favor, ingrese un nombre de usuario válido.</label>
        `;
    }
});


/*
9.- Dada una lista de usuarios de github guardada en una array,crea una funcion 
fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/${name}' 
para obtener el nombre de cada usuario.
Objetivo: Usar Promise.all()
Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
Pregunta. ¿cuántas promesas tendremos?
*/
//async function fetchGithubUsers(usernames) {}
const fetchGithubUsers = async (usernames) => {
    // creamos un array de promesas de fetch usando map
    const arr_Promises = usernames.map(user => 
        fetch(`https://api.github.com/users/${user}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
    );

    // Esperamos a que todas las promesas se resuelvan y devuelve un array 
    // con los datos de los usuarios.
    try {
        /*
        await: Este operador se usa dentro de funciones async y le dice 
        al motor de JavaScript que debe esperar a que la promesa se resuelva 
        antes de seguir adelante con la ejecución del código. 
        Si no utilizamos await, el código que sigue se ejecutará inmediatamente, 
        sin esperar el resultado de la promesa.
        */
        const users = await Promise.all(arr_Promises);
        return users;
    } catch (error) {
        console.error('Error en alguna de las Promesas:', error);
    }
};
fetchGithubUsers(['octocat', 'alenriquez96', 'alejandroereyesb'])
    .then(users => {
        console.log("Ejercicio 9");
        console.log(users);
        console.log("****************");
    });