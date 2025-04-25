# Clase: Scope, Closure e Introducción a Asincronismos en JavaScript

## Parte 1: Scope (Ámbito)

### ¿Qué es el Scope?
El scope determina el acceso a las variables en diferentes partes del código.

### Tipos de Scope:
- **Global Scope:** Accesible desde cualquier parte.
- **Local Scope (Function Scope):** Accesible solo dentro de la función.
- **Block Scope (desde ES6 con let/const):** Accesible solo dentro del bloque `{}`.

```js
let globalVar = "Soy global";

function testScope() {
  let localVar = "Soy local";
  console.log(globalVar); // Accede a la global
}

console.log(localVar); // Error: no definida
```

---

## Parte 2: Closures (Clausuras)

### ¿Qué es un Closure?
Es una función que recuerda el scope en el que fue creada, incluso después de que ese scope haya terminado.

```js
function crearContador() {
  let contador = 0;
  return function() {
    contador++;
    console.log(contador);
  };
}

const contar = crearContador();
contar(); // 1
contar(); // 2
```

---

## Parte 3: Introducción a la Asincronía

### ¿Por qué necesitamos asincronismo?
JavaScript es single-threaded. La asincronía permite no bloquear la ejecución.

### Ejemplo con setTimeout:
```js
console.log("Inicio");

setTimeout(() => {
  console.log("Esperando...");
}, 2000);

console.log("Fin");
```

---

## Parte 4: Callbacks

### ¿Qué es un Callback?
Es una función que se pasa como argumento a otra función.

```js
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

saludar("Ana", () => {
  console.log("Esto es un callback");
});
```

---

## Parte 5: Callback Hell

### ¿Qué es el Callback Hell?
Cuando se anidan muchos callbacks, el código se vuelve difícil de leer y mantener.

```js
loginUsuario("user", () => {
  obtenerDatos((datos) => {
    guardarDatos(datos, () => {
      console.log("Proceso terminado");
    });
  });
});
```

---

## Ejercicios (30%)

### 1. Scope
- Crea una función que tenga variables locales y globales.
- Muestra qué pasa si tratas de acceder a una variable local desde fuera.

### 2. Closure
- Crea una función que mantenga un contador utilizando closure.

### 3. Callback
- Escribe una función que tome un callback como parámetro y lo ejecute luego de 3 segundos.

