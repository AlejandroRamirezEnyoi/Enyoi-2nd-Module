# 🌐 Clase: Responsive Web Design y Arquitectura BEM  

⏳ **Duración:** 2 horas  
📖 **Formato:** 70\% teoría - 30\% práctica  

---

## 🎯 Objetivos de la Clase  
Al finalizar la sesión, los estudiantes serán capaces de:  
✅ Entender qué es el **Responsive Web Design** y su importancia.  
✅ Usar **Media Queries** para adaptar una web a diferentes dispositivos.  
✅ Comprender la **arquitectura BEM** y su aplicación en CSS.  
✅ Implementar ambos conceptos en un ejercicio práctico.  

---

## 📌 **1. ¿Qué es Responsive Web Design \(RWD\)?**  
**Responsive Web Design** es una técnica que permite a los sitios web **adaptarse automáticamente** al tamaño de la pantalla del usuario.  

🔹 **Beneficios:**  
✔️ Mejor experiencia de usuario \(UX\).  
✔️ Mayor accesibilidad en dispositivos móviles.  
✔️ SEO optimizado \(Google prioriza sitios responsivos\).  

---

## 📌 **2. Media Queries en CSS**  
Las **Media Queries** permiten definir estilos según el tamaño de la pantalla.  

### Brakpoints
```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```
### 📌 **Ejemplo básico de Media Query**  
```css
body {
  background-color: lightblue;
}

@media screen and (max-width: 768px) {
  body {
    background-color: lightcoral;
  }
}
```

### 📌 3. Arquitectura BEM 
𝐵
𝑙
𝑜
𝑐
𝑘
,
𝐸
𝑙
𝑒
𝑚
𝑒
𝑛
𝑡
,
𝑀
𝑜
𝑑
𝑖
𝑓
𝑖
𝑒
𝑟
## Block,Element,Modifier
BEM es una metodología para escribir CSS modular y reutilizable.

🔹 Estructura de nombres en BEM:

```css

/* Bloque */
.card {}

/* Elemento */
.card__title {}

/* Modificador */
.card--dark {}
```

📌 4. Ejemplo práctico de  BEM
```html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```
```css
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```
✅ Se aplica BEM y Responsive Web Design en una misma estructura.

## 📝 Ejercicio Adicional
### 📌 Crea una página responsive con BEM aplicando media queries para hacer que:

Los botones cambien de tamaño en dispositivos móviles.

Las imágenes se adapten proporcionalmente.

El menú de navegación se convierta en un menú hamburguesa en móviles.

### 🔗 Recursos Útiles
🔹 https://developer.mozilla.org/en-US/docs/Web/CSS/@media<br>
🔹 https://getbem.com/introduction/
