# 🎨 Clase: Motores de Preprocesadores CSS - SASS  

⏳ **Duración:** 2 horas  
📖 **Formato:** 70% teoría - 30% práctica  

---

## 🟢 **1. ¿Qué es un preprocesador CSS?**  
Un **preprocesador CSS** es una herramienta que amplía las capacidades de CSS al permitir el uso de:  
✅ **Variables**  
✅ **Funciones y mixins**  
✅ **Anidamiento de reglas**  
✅ **Condicionales y bucles**  
✅ **Modularización del código**  

**Ejemplo de código con SASS:**  
```scss
$color-primario: #3498db;

body {
  background-color: $color-primario;
  h1 {
    color: white;
  }
}
```
🔹 Aquí usamos una variable $color-primario y anidamos h1 dentro de body.

## 🔵 2. Instalación y Configuración de SASS
🔹 Paso 1: Instalar Node.js y npm
Para compilar SASS, necesitamos Node.js y su administrador de paquetes npm.

🔗 Descarga Node.js desde su sitio oficial:
https://nodejs.org

Instalación en Windows:
1️⃣ Descarga el instalador desde la web.
2️⃣ Ejecuta el instalador y sigue las instrucciones.
3️⃣ Verifica la instalación con:

```sh
node -v
npm -v
```

### Instalación en Linux (Ubuntu/Debian):
Ejecuta en la terminal:

```sh
sudo apt update
sudo apt install nodejs npm
```
### Instalación en macOS (Homebrew):
```sh
brew install node
```
## 🔵 3. Instalación de SASS
### Opción 1: Instalar SASS con npm
Una vez instalado Node.js, instala SASS con:

```sh
npm install -g sass
```
### Verifica la instalación con:

```sh
sass --version
```
### Opción 2: Compiladores en línea
Si no quieres instalar nada, prueba SassMeister:
🔗 https://www.sassmeister.com/

## 🟣 4. Reglas y Funcionalidades de SASS
### 📌 4.1 Variables
```scss
$color-texto: #ff5733;

p {
  color: $color-texto;
}
```

## 📌 4.2 Nesting (Anidamiento)
```scss
nav {
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
```
## 📌 4.3 Mixins (Funciones reutilizables)
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```


### 🎯 Ejercicio Práctico
🔹 Crea un archivo styles.scss con variables, nesting y un mixin para centrar elementos.
🔹 Compílalo a CSS con:

```sh
sass styles.scss styles.css
```
🔹 Usa Live Sass Compiler en VSCode para compilar automáticamente.

### 📚 Recursos Útiles
🔗 Documentación Oficial de SASS: https://sass-lang.com/documentation
🔗 Guía de Node.js: https://nodejs.org/en/docs