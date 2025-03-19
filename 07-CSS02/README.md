# 🖥️ Clase: Modelo de Caja y Unidades de Medida en CSS  

⏳ **Duración:** 2 horas  
📖 **Formato:** 70% teoría - 30% práctica  

---

## 📌 Objetivos de la Clase  
Al finalizar esta sesión, los estudiantes serán capaces de:  
✅ Comprender el **Modelo de Caja** en CSS.  
✅ Usar propiedades como `width`, `height`, `margin`, `padding` y `border`.  
✅ Conocer las **unidades de medida** en CSS (`px`, `%`, `em`, `rem`, `vw`, `vh`, etc.).  
✅ Aplicar estos conceptos en ejemplos prácticos.  

---

## 🟢 1. El Modelo de Caja en CSS  
En CSS, **todos los elementos** de una página web se representan como **cajas rectangulares**. Estas cajas están compuestas por:  

🔹 **Contenido (`content`)** → El área donde se muestra el texto o las imágenes.  
🔹 **Padding** → Espacio interno entre el contenido y el borde.  
🔹 **Border** → Línea que rodea el contenido y el padding.  
🔹 **Margin** → Espacio externo entre el borde del elemento y otros elementos.  

📌 **Ejemplo visual del modelo de caja:**  

+-------------------------------+ | Margin | | +-----------------------+ | | | Border | | | | +---------------+ | | | | | Padding | | | | | | +---------+ | | | | | | | Content | | | | | | | +---------+ | | | | | | | | | | | +---------------+ | | | +-----------------------+ | +-------------------------------+

📌 **Ejemplo en CSS:**  
```css
.caja {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  background-color: lightblue;
}
```

## 2. Propiedad box-sizing
Por defecto, CSS calcula el tamaño de una caja sumando width + padding + border. Sin embargo, con box-sizing: border-box; podemos hacer que width y height incluyan el padding y el borde.

📌 **Ejemplo en CSS:**
```css
* {
  box-sizing: border-box;
}
```

## 🟠 3. Unidades de Medida en CSS
Existen dos tipos de unidades de medida en CSS:

📏 1. Unidades Absolutas
Son fijas y no dependen del contexto:

px (píxeles) → La unidad más común.

cm, mm, in (poco usadas).

### 🔄 2. Unidades Relativas
Se adaptan al tamaño del contenedor o la pantalla:

% → Relativo al tamaño del elemento padre.

em → Relativo al tamaño de la fuente del elemento.

rem → Relativo al tamaño de la fuente del html.

vw → 1% del ancho de la ventana.

vh → 1% del alto de la ventana.

📌 Ejemplo comparativo en CSS:

```css
	.porcentaje {
  width: 50%;
} /* Ocupa la mitad del elemento padre */

.em {
  font-size: 2em;
} /* Doble del tamaño de fuente del padre */

.rem {
  font-size: 2rem;
} /* Doble del tamaño de fuente del HTML */

```

## ✍️ Ejercicio Práctico
Crea una caja con las siguientes características:
✅ Ancho: 300px
✅ Alto: 150px
✅ Padding: 20px
✅ Borde: 5px sólido negro
✅ Margen: 30px
✅ Color de fondo: azul claro

📌 Código base en HTML y CSS:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modelo de Caja</title>
  <style>
    .caja {
      width: 300px;
      height: 150px;
      padding: 20px;
      border: 5px solid black;
      margin: 30px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div class="caja">Hola, soy una caja</div>
</body>
</html>
```

## 📚 Recursos Útiles
https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model
