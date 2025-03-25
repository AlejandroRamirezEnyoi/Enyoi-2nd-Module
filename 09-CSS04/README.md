# 🖥️ Clase: Flexbox y Grid Layout en CSS  

⏳ **Duración:** 2 horas  
📖 **Formato:** 70% teoría - 30% práctica  

---

## 📌 Objetivos de la Clase  
Al finalizar esta sesión, los estudiantes serán capaces de:  
✅ Comprender cómo funciona **Flexbox** para alinear elementos en una fila o columna.  
✅ Usar **Grid Layout** para crear diseños avanzados en CSS.  
✅ Diferenciar cuándo usar **Flexbox** y cuándo **Grid**.  
✅ Aplicar estos conceptos en ejemplos prácticos.  

---

## 🟢 1. Introducción a Flexbox  
Flexbox es un modelo de diseño unidimensional que permite distribuir elementos en **fila o columna** de manera flexible.  

### 📌 Propiedades del Contenedor (`display: flex;`)  
```css
.contenedor {
  display: flex; /* Activa Flexbox */
  flex-direction: row; /* Dirección de los elementos */
  justify-content: center; /* Alineación horizontal */
  align-items: center; /* Alineación vertical */
}
```

🔹 flex-direction → Define la dirección (row, column).
🔹 justify-content → Controla la alineación horizontal.
🔹 align-items → Controla la alineación vertical.

### 📌 Propiedades de los Elementos Flexibles

```css
.item {
  flex-grow: 1; /* Ocupa el espacio disponible */
  flex-shrink: 1; /* Se reduce si es necesario */
  flex-basis: 100px; /* Tamaño base */
}
```

## 🟢 2. Introducción a Grid Layout
Grid Layout permite diseñar páginas en dos dimensiones (filas y columnas).

### 📌 Propiedades del Contenedor (display: grid;)
```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 columnas */
  grid-template-rows: auto 200px; /* Filas */
  gap: 10px; /* Espacio entre celdas */
}

```
🔹 grid-template-columns → Define el número y tamaño de columnas.
🔹 grid-template-rows → Define el número y tamaño de filas.
🔹 gap → Agrega espacio entre los elementos.

### 📌 Propiedades de los Elementos
```css

.item {
  grid-column: 1 / 3; /* Ocupa 2 columnas */
  grid-row: 1 / 2; /* Ocupa 1 fila */
}
```
## 🟣 3. Flexbox vs Grid: ¿Cuándo usar cada uno?
Flexbox	Grid
Diseños unidimensionales (fila o columna).	Diseños bidimensionales (filas y columnas).
Distribuir elementos dinámicamente.	Crear estructuras de diseño complejas.
Alinear contenido en un eje principal.	Definir un layout más estructurado.
### 🔥 Ejercicio Práctico
Crea un diseño de galería de imágenes con Grid y un menú responsive con Flexbox.

📌 Recursos útiles:

🔗 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
🔗 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
🔗 https://flexboxfroggy.com/#es
🔗 https://mastery.games/flexboxzombies/