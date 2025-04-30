# Clase: Promesas y Async/Await en JavaScript

## Duración: 2 horas (70% teoría / 30% práctica)

---

## 1. ¿Qué es una Promesa?

Una **promesa** es un objeto que representa el resultado eventual (éxito o error) de una operación asincrónica.

### Estados de una promesa:

- **Pending**: En espera.
- **Fulfilled**: Se resolvió exitosamente.
- **Rejected**: Falló.

### Sintaxis básica:

```js
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("Éxito");
  } else {
    reject("Error");
  }
});

miPromesa
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

---

## 2. Ejemplo real: simulando una petición HTTP

```js
function obtenerDatosUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ id, nombre: "Juan" });
      } else {
        reject("Usuario no encontrado");
      }
    }, 1000);
  });
}

obtenerDatosUsuario(1)
  .then(data => console.log("Usuario:", data))
  .catch(err => console.error(err));
```

---

## 3. Encadenamiento de Promesas

```js
getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComentarios(posts[0].id))
  .then(comentarios => console.log(comentarios))
  .catch(error => console.error("Error:", error));
```

---

## 4. ¿Qué es `async/await`?

Permite escribir código asincrónico con una sintaxis similar al código sincrónico. Simplifica el uso de promesas y evita el "callback hell".

### Ejemplo:

```js
async function cargarDatos() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comentarios = await getComentarios(posts[0].id);
    console.log(comentarios);
  } catch (error) {
    console.error("Error:", error);
  }
}

cargarDatos();
```

---

## 5. Comparación: Promesas vs Async/Await

| Característica    | Promesas                    | Async/Await          |
| ----------------- | --------------------------- | -------------------- |
| Sintaxis          | Encadenamiento de `.then()` | Uso de `await`       |
| Lectura           | Puede ser compleja          | Más limpia y legible |
| Manejo de errores | `.catch()`                  | `try/catch`          |

---

## 6. Ejercicios sugeridos (práctica)

- Crear una función que simule la carga de productos desde una API falsa con `Promise`.
- Encadenar dos operaciones: cargar usuario y sus tareas.
- Reescribir un flujo con `async/await`.
- Manejar errores con `try/catch`.

