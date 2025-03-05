## **Clase: Funcionamiento de Navegadores, Servicios y Servidores Web, y Páginas Estáticas vs Dinámicas**
⏳ **Duración:** 2 horas  
📌 **Enfoque:** 30% teoría – 70% práctica y ejemplos

---

## **1. ¿Cómo Funcionan los Navegadores?**
Los navegadores web son aplicaciones que permiten a los usuarios acceder, interpretar y mostrar el contenido de Internet. Su funcionamiento básico se puede resumir en los siguientes pasos:

### **1.1 Proceso de Carga de una Página**
1. **Entrada de la URL:**  
   - El usuario ingresa una URL (por ejemplo, `https://www.ejemplo.com/index.html`).
2. **Resolución DNS:**  
   - El navegador consulta al sistema DNS para traducir el dominio (`www.ejemplo.com`) en una dirección IP.
3. **Establecimiento de la Conexión:**  
   - Se establece una conexión TCP/IP con el servidor web usando el protocolo HTTP o HTTPS.
4. **Envío de la Solicitud HTTP:**  
   - El navegador envía una petición HTTP al servidor (por ejemplo, `GET /index.html HTTP/1.1`).
5. **Recepción de la Respuesta:**  
   - El servidor responde con el recurso solicitado (HTML, CSS, JS, imágenes, etc.) y un código de estado (por ejemplo, 200 OK).
6. **Renderizado de la Página:**  
   - El navegador interpreta el HTML, aplica el CSS y ejecuta el JavaScript para mostrar la página de forma interactiva.
7. **Ejecución de Scripts y Eventos:**  
   - Se ejecutan scripts adicionales (por ejemplo, para animaciones, peticiones AJAX, etc.) una vez cargado el contenido inicial.

### **1.2 Ejemplo de Flujo Simplificado**
```plaintext
Usuario ingresa URL --> Navegador consulta DNS --> Establece conexión con el servidor --> Envía solicitud HTTP --> Recibe respuesta con HTML/CSS/JS --> Renderiza la página en la pantalla
```

---

## **2. Servicios y Servidores Web**
Los **servidores web** son programas o sistemas que alojan sitios web y responden a las solicitudes HTTP realizadas por los navegadores. Los **servicios web** hacen referencia a aplicaciones o funciones que se ofrecen a través de Internet (por ejemplo, APIs REST).

### **2.1 Servidores Web**
- **Definición:**  
  Un servidor web es una computadora que almacena archivos de un sitio (HTML, CSS, JS, imágenes, etc.) y los entrega a los clientes cuando se solicita.
- **Ejemplos Populares:**  
  - **Apache HTTP Server**  
  - **Nginx**  
  - **Microsoft IIS**

### **2.2 Servicios Web**
- **Definición:**  
  Son aplicaciones o interfaces que permiten a los sistemas comunicarse entre sí a través de Internet, generalmente utilizando protocolos como HTTP.
- **Ejemplo:**  
  Una API REST que permite consultar información de productos mediante peticiones GET, POST, PUT y DELETE.

### **2.3 Ejemplo de Solicitud a un Servidor Web**
```http
GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html
```
El servidor web responde con el contenido de la página solicitada.

---

## **3. Páginas Estáticas vs Páginas Dinámicas**
La diferencia entre páginas estáticas y dinámicas radica en cómo se genera el contenido y en la interacción con el usuario.

### **3.1 Páginas Estáticas**
- **Definición:**  
  Son páginas web que tienen contenido fijo, escrito en HTML, CSS y a veces JavaScript. Cada vez que se solicita la página, se entrega el mismo contenido.
- **Características:**  
  - Rápidas de cargar.  
  - Menor consumo de recursos en el servidor.  
  - Ideales para sitios con información que no cambia frecuentemente (por ejemplo, sitios corporativos, portafolios).
- **Ejemplo de Página Estática:**  
  Un simple archivo HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página Estática</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>Bienvenidos a mi sitio web</h1>
  <p>Este es un contenido fijo.</p>
  <script src="script.js"></script>
</body>
</html>
```

### **3.2 Páginas Dinámicas**
- **Definición:**  
  Son páginas web cuyo contenido se genera de forma dinámica, generalmente a partir de datos almacenados en bases de datos y utilizando lenguajes de programación del lado del servidor (PHP, Node.js, ASP.NET, etc.).
- **Características:**  
  - Contenido personalizado o actualizado en tiempo real.  
  - Permiten interacción y generación de contenido según la solicitud del usuario.
  - Suelen requerir más recursos y procesamiento en el servidor.
- **Ejemplo de Página Dinámica:**  
  Un script en PHP que genera contenido basado en una consulta a la base de datos:
```php
<?php
// Conectar a la base de datos y obtener noticias
$conexion = new PDO("mysql:host=localhost;dbname=noticias", "usuario", "contraseña");
$consulta = $conexion->query("SELECT titulo, contenido FROM noticias");
while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
    echo "<h2>" . htmlspecialchars($fila['titulo']) . "</h2>";
    echo "<p>" . htmlspecialchars($fila['contenido']) . "</p>";
}
?>
```

---

## **4. Actividad Práctica (40 min)**
### **Ejercicio 1: Analizar una URL y su Proceso**
- Dibuja el flujo desde que el usuario ingresa una URL hasta que el navegador muestra la página.  
- Identifica los componentes de una URL (protocolo, dominio, ruta, parámetros).

### **Ejercicio 2: Configuración de un Servidor Web Simple**
- Utiliza un servidor web local (por ejemplo, XAMPP, WampServer o MAMP) para alojar una página estática y luego una dinámica.  
- Comparte la URL y observa las diferencias en la respuesta.

### **Ejercicio 3: Debate y Discusión**
- Discute las ventajas y desventajas de utilizar páginas estáticas frente a páginas dinámicas.  
- ¿Cuándo sería mejor cada opción?

---

/~## **5. Cierre y Preguntas (10 min)**
- Repasar conceptos clave:  
  - Funcionamiento de los navegadores.  
  - Cómo se comunican los clientes y servidores mediante HTTP.
  - Diferencias entre páginas estáticas y dinámicas.
- Resolver dudas y discutir ejemplos prácticos.
- Desafío para casa: Investigar sobre el impacto de HTTP/2 y HTTP/3 en la velocidad y seguridad de la web.
