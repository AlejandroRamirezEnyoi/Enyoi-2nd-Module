# 🖥️ Clase: Propiedad `position`, `display` y Variables en CSS  

⏳ **Duración:** 2 horas  
📖 **Formato:** 70% teoría - 30% práctica  

---

## 📌 Objetivos de la Clase  
Al finalizar esta sesión, los estudiantes serán capaces de:  
✅ Comprender la propiedad `position` y sus valores en CSS.  
✅ Entender cómo funciona la propiedad `display` y sus valores más usados.  
✅ Aplicar variables en CSS para optimizar estilos.  
✅ Utilizar estas propiedades en ejemplos prácticos.  

---

## 🟢 1. Propiedad `position` en CSS  
La propiedad `position` controla cómo se coloca un elemento en la página. Tiene los siguientes valores:  

### 📍 `static` (Por defecto)  
El elemento sigue el flujo normal del documento.  
```css
.elemento {
  position: static;
}
```
📍 relative (Posición relativa)
El elemento se mueve relativo a su posición original con top, left, right, bottom.

```css
.elemento {
  position: relative;
  top: 20px;
  left: 10px;
}
```

📍 absolute (Posición absoluta)
El elemento se mueve respecto a su elemento padre con position: relative o, si no tiene, respecto al <body>.

```css
.padre {
  position: relative;
}
.hijo {
  position: absolute;
  top: 50px;
  left: 100px;
}
```
📍 fixed (Fijo en la pantalla)
El elemento se mantiene en la misma posición aunque se haga scroll.

```css
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  background: black;
  color: white;
}
```
📍 sticky (Se mantiene fijo al hacer scroll)
El elemento se pega en una posición cuando el usuario hace scroll.

```css
.header {
  position: sticky;
  top: 0;
  background: yellow;
}
```
🔵 2. Propiedad display en CSS
Controla cómo se presentan los elementos en la página.

📌 block
Los elementos ocupan todo el ancho disponible y empiezan en una nueva línea.

```css
div {
  display: block;
}
```
📌 inline
Los elementos solo ocupan el ancho de su contenido y no permiten modificar width o height.

```css
span {
  display: inline;
}
```
📌 inline-block
Similar a inline, pero permite modificar width y height.

```css
.elemento {
  display: inline-block;
  width: 100px;
  height: 50px;
}
```
📌 flex (Modelo de Caja Flexible)
Permite distribuir elementos de forma flexible en filas o columnas.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
📌 grid (Diseño en cuadrícula)
Organiza los elementos en filas y columnas.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```
🟠 3. Variables en CSS
Las variables en CSS permiten reutilizar valores en diferentes estilos.

📌 Definir una variable:

```css
:root {
  --color-primario: #3498db;
  --espaciado: 10px;
}
```
📌 Usar la variable:

```css
.boton {
  background-color: var(--color-primario);
  padding: var(--espaciado);
}
```
📌 Modificar una variable en un elemento específico:

```css
.card {
  --color-primario: #e74c3c;
}
```
✍️ Ejercicio Práctico
Instrucciones:
1️⃣ Crea un menú de navegación fijo usando position: fixed.
2️⃣ Agrega una caja flotante usando position: absolute.
3️⃣ Usa display: flex para centrar elementos dentro de un contenedor.
4️⃣ Define variables en CSS y úsalas en diferentes elementos.

