# 📌 **Introducción a CSS (Cascading Style Sheets)**  

---

## ✅ ¿Qué es CSS?  
CSS (**Cascading Style Sheets** o **Hojas de Estilo en Cascada**) es el lenguaje utilizado para **dar estilo y diseño** a las páginas web.  

---

## 🎯 **Reglas CSS**  
Una **regla CSS** define cómo se aplican los estilos a los elementos HTML.  

### 🌟 **Estructura de una regla CSS**:  
```css
selector {
  propiedad: valor;
}
```  

### 🔍 Ejemplo:  
```css
h1 {
  color: blue;
  font-size: 24px;
}
```  

---

## ✅ **Principales Propiedades CSS**  

| Propiedad      | Descripción                | Ejemplo                    |
|----------------|---------------------------------|---------------------------|
| `color`        | Cambia el color del texto | `color: red;` |
| `background-color` | Cambia el color de fondo | `background-color: black;` |
| `font-size` | Tamaño de la fuente | `font-size: 20px;` |
| `margin` | Espacio externo del elemento | `margin: 10px;` |
| `padding` | Espacio interno del elemento | `padding: 15px;` |
| `border` | Agrega bordes | `border: 2px solid black;` |

---

## ✅ Ejemplo Práctico:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Clase CSS</title>
  <style>
    p {
      color: green;
      font-size: 18px;
      background-color: lightgray;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>¡Hola CSS!</h1>
  <p>Este es un párrafo con CSS aplicado.</p>
</body>
</html>
```  

---

## ✅ Práctica recomendada:
- Modificar colores y fuentes  
- Ajustar márgenes y paddings  
- Cambiar fondos y bordes  

## Reto: Diseñando una Landing Page básica con CSS
📝 Instrucciones
- Crea un archivo llamado index.html y un archivo style.css.

- En el HTML, crea una estructura simple que incluya:

- Un encabezado (
	```html
	<header>
	```	
		)

- Una sección con texto (
	```html 
	<section>
	```
		)

- Un botón (
	```html
	<button>
		```
		)

- Un pie de página (
	```html 
	<footer>
		```
		)

- En el CSS, aplica los siguientes estilos:

- Cambia el color de fondo de la página.

- Cambia la fuente de letra a Arial.

- El encabezado debe tener color blanco y fondo negro.

- El botón debe cambiar de color cuando el usuario pase el cursor (hover).

 -El footer debe estar centrado y con un color diferente.