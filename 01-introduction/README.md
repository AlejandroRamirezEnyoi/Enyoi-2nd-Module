**Clase: Historia y Funcionamiento de la Web**
⏳ **Duración:** 2 horas  

---

## **1. Historia de la Web**
La web ha evolucionado desde sus inicios en la década de 1990 hasta convertirse en la plataforma global que conocemos hoy.  
- **Orígenes:**  
  - Fue inventada por Tim Berners-Lee en 1989/1990 en el CERN.  
  - Se desarrolló el primer navegador y servidor web.
- **Evolución:**  
  - La web estática de los inicios (HTML puro, pocos estilos).  
  - La web dinámica y la aparición de lenguajes del lado del servidor (PHP, ASP, etc.).
  - La llegada de AJAX, APIs REST, y posteriormente, frameworks modernos.
- **Impacto:**  
  - Transformó la forma de compartir información y de hacer negocios en línea.

---

## **2. ¿Cómo Funciona la Web?**
La web es una red de servidores y clientes (navegadores) que se comunican a través de protocolos estandarizados:
- **Cliente:** Navegador web que realiza peticiones.
- **Servidor:** Aloja páginas web, archivos y aplicaciones.
- **Comunicación:** Se establece mediante protocolos como HTTP/HTTPS.

**Flujo básico:**
1. El usuario introduce una URL en el navegador.
2. El navegador realiza una solicitud HTTP al servidor.
3. El servidor procesa la solicitud y envía la respuesta (HTML, CSS, JS, etc.).
4. El navegador interpreta y muestra la información.

---

## **3. URL, Dominio y Hosting**
### **3.1 URL (Uniform Resource Locator)**
- **Definición:** Es la dirección que se utiliza para localizar recursos en la web.
- **Estructura típica:**
  - **Protocolo:** `http://` o `https://`
  - **Dominio:** `www.ejemplo.com`
  - **Ruta:** `/ruta/al/recurso`
  - **Parámetros y fragmentos:** `?id=123#seccion`
  
_Ejemplo:_  
```plaintext
https://www.ejemplo.com/productos?id=10
```

### **3.2 Dominio**
- **Definición:** Es el nombre único que identifica un sitio en Internet (ej. `ejemplo.com`).
- **Registro:** Se obtiene a través de entidades registradoras (ICANN, registradores locales).
- **Importancia:** Facilita que los usuarios accedan al sitio sin tener que recordar una dirección IP.

### **3.3 Hosting (Alojamiento Web)**
- **Definición:** Servicio que almacena los archivos de un sitio web en servidores conectados a Internet.
- **Tipos de hosting:**
  - **Compartido:** Múltiples sitios en el mismo servidor.
  - **VPS (Servidor Privado Virtual):** Recursos dedicados virtualmente.
  - **Dedicado:** Servidor completo para un solo sitio.
  - **Cloud Hosting:** Alojamiento en la nube con escalabilidad.
- **Relación con el dominio:** El dominio apunta (mediante DNS) a la dirección IP del servidor de hosting.

---

## **4. Protocolo HTTP**
El **HTTP (HyperText Transfer Protocol)** es el protocolo base para la comunicación en la web:
- **Funcionamiento:**  
  - Cliente (navegador) realiza peticiones HTTP al servidor.
  - El servidor responde con códigos de estado (200, 404, 500, etc.) y el contenido solicitado.
- **Características:**  
  - Es un protocolo sin estado: cada petición es independiente.
  - Con HTTPS se añade una capa de encriptación (SSL/TLS).
- **Ejemplo de una petición HTTP básica:**
```http
GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0
Accept: text/html
```

---

## **5. DNS (Domain Name System)**
El **DNS** es el sistema que traduce nombres de dominio legibles (ej. `ejemplo.com`) a direcciones IP numéricas que identifican los servidores en Internet.
- **Proceso:**
  1. El navegador solicita la IP asociada al dominio.
  2. El resolver DNS consulta servidores raíz, TLD y finalmente el servidor autoritativo.
  3. Se devuelve la dirección IP para establecer la conexión.
- **Importancia:**  
  - Permite que los usuarios usen nombres amigables en lugar de direcciones IP difíciles de recordar.
  
---
