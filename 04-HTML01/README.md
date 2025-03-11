# Conociendo el Inspector de Elementos y la Anatomía de una Página Web  

## 📌 Introducción  
Cuando trabajamos con desarrollo web, es fundamental comprender cómo está estructurada una página y cómo podemos inspeccionarla para depurar errores o modificar su apariencia.  

---  

## 🔍 **Conociendo el Inspector de Elementos**  
El inspector de elementos es una herramienta integrada en los navegadores modernos que permite analizar y modificar temporalmente el código de una página.  

### 📌 ¿Cómo acceder al Inspector?  
Dependiendo del navegador que utilices:  
- **Google Chrome / Edge**:  
  - Click derecho → "Inspeccionar"  
  - Atajo de teclado: `F12` o `Ctrl + Shift + I` (`Cmd + Option + I` en Mac)  
- **Mozilla Firefox**:  
  - Click derecho → "Inspeccionar"  
  - Atajo de teclado: `F12` o `Ctrl + Shift + I`  
- **Safari** (debe activarse primero en preferencias avanzadas):  
  - Click derecho → "Inspeccionar elemento"  

### 📌 Herramientas principales del Inspector  
1. **Elements (Elementos)**:  
   - Muestra la estructura HTML de la página.  
   - Permite modificar etiquetas y atributos en tiempo real.  
   - Útil para probar cambios antes de editarlos en el código fuente.  
   
2. **Styles (Estilos / CSS)**:  
   - Permite ver y modificar las reglas CSS aplicadas a un elemento.  
   - Se pueden probar colores, márgenes, tamaños, etc.  

3. **Console (Consola JavaScript)**:  
   - Permite ejecutar comandos en tiempo real.  
   - Útil para depuración de errores en código JavaScript.  

4. **Network (Red)**:  
   - Muestra las solicitudes HTTP de la página.  
   - Ayuda a diagnosticar tiempos de carga lentos y errores de conexión.  

5. **Sources (Fuentes)**:  
   - Permite ver y depurar archivos JavaScript.  
   - Opción para colocar breakpoints y analizar código en ejecución.  

---

## 🏗 **Anatomía de una Página Web**  

Para entender cómo funciona una página web, es clave conocer sus componentes esenciales:  

### 📌 **¿Qué es el HTML?**  
HTML (**HyperText Markup Language**) es el lenguaje de marcado utilizado para estructurar el contenido de una página web.  

Ejemplo de estructura básica de un documento HTML:  
```html  
<!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Mi Página Web</title>  
</head>  
<body>  
    <h1>¡Hola, mundo!</h1>  
    <p>Bienvenidos a mi página web.</p>  
</body>  
</html>  
```

### 📌 **Estructura de una Página Web**  
1. **Doctype (`<!DOCTYPE html>`)**: Indica que el documento usa HTML5.  
2. **`<html>`**: Contenedor principal de la página.  
3. **`<head>`**: Contiene información meta, enlaces a CSS y scripts.  
4. **`<body>`**: Contiene el contenido visible de la página (textos, imágenes, botones, etc.).  

---

## 🔧 **Práctica Guiada (30%)**  

### 🏆 **Ejercicio 1: Inspección de una Página**  
**Objetivo:** Aprender a modificar temporalmente una página web usando el inspector.  

**Pasos:**  
1. Abre cualquier página web en tu navegador.  
2. Usa `F12` o `Click derecho → Inspeccionar`.  
3. Localiza un título (`<h1>`) y cámbialo a `"Hola desde el Inspector!"`.  
4. Modifica los estilos CSS de algún elemento (color, tamaño, fondo).  

### 🏆 **Ejercicio 2: Experimentando con la Consola**  
**Objetivo:** Ejecutar comandos básicos en la consola del navegador.  

**Pasos:**  
1. Abre la pestaña "Console".  
2. Escribe y ejecuta los siguientes comandos:  
   ```js  
   console.log("¡Hola, mundo!");  
   document.body.style.backgroundColor = "lightblue";  
   alert("¡Has modificado la página!");  
   ```
3. Observa los cambios en la página.  

---

## 🎯 **Conclusión y Cierre**  
- El inspector de elementos es una herramienta poderosa para depuración y experimentación.  
- HTML es la base estructural de las páginas web.  
- Con la consola, podemos manipular elementos en tiempo real.  
- La práctica con estas herramientas acelera el aprendizaje y mejora la comprensión del desarrollo web.  

🚀 **Tarea:** Inspecciona y modifica una página web, cambia colores, textos y observa los cambios en la consola.  

---
