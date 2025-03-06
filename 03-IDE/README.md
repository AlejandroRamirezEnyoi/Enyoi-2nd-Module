## **Clase: Instalación y Configuración de VSCode y Espacio de Trabajo**
⏳ **Duración:** 2 horas  
📌 **Enfoque:** 30% teoría – 70% práctica

---

## **1. Introducción a Visual Studio Code (VSCode)**
VSCode es un editor de código fuente ligero y potente, desarrollado por Microsoft.  
- **Características:**  
  - Multiplataforma: Disponible para Windows, macOS y Linux.  
  - Extensible: Amplia biblioteca de extensiones para soportar lenguajes, depuración, control de versiones, etc.  
  - Configuración de Espacio de Trabajo: Permite organizar proyectos con settings específicos por carpeta o proyecto.

---

## **2. Enlaces de Instalación para Cada Sistema Operativo**

### **2.1 Windows**
- **Enlace de descarga:** [VSCode para Windows](https://code.visualstudio.com/Download)
- **Pasos de instalación:**
  1. Accede al enlace y descarga el instalador para Windows.
  2. Ejecuta el archivo descargado (`VSCodeSetup.exe`).
  3. Sigue el asistente de instalación:
     - Acepta los términos de licencia.
     - Elige el directorio de instalación.
     - Selecciona opciones adicionales (crear icono de escritorio, agregar al PATH, etc.).
  4. Finaliza la instalación y abre VSCode.

### **2.2 macOS**
- **Enlace de descarga:** [VSCode para macOS](https://code.visualstudio.com/Download)
- **Pasos de instalación:**
  1. Accede al enlace y descarga el archivo `.zip` para macOS.
  2. Descomprime el archivo descargado.
  3. Arrastra la aplicación **Visual Studio Code.app** a la carpeta **Aplicaciones**.
  4. Abre VSCode desde la carpeta de Aplicaciones.

### **2.3 Linux**
- **Enlace de descarga:** [VSCode para Linux](https://code.visualstudio.com/Download)
- **Pasos de instalación (Ejemplo para Ubuntu/Debian):**
  1. Descarga el paquete `.deb` desde el enlace.
  2. Instala el paquete utilizando el siguiente comando en la terminal:
     ```sh
     sudo dpkg -i code_*_amd64.deb
     sudo apt-get install -f
     ```
  3. Alternativamente, puedes instalar VSCode mediante Snap:
     ```sh
     sudo snap install --classic code
     ```
- **Para otras distribuciones:**  
  Consulta la sección de instalación en [Documentación oficial](https://code.visualstudio.com/docs/setup/linux).

---

## **3. Configuración del Espacio de Trabajo en VSCode**

### **3.1 ¿Qué es un Espacio de Trabajo?**
- Un **espacio de trabajo** es una configuración que agrupa una o más carpetas y define ajustes específicos (settings, tareas, extensiones recomendadas, etc.) para ese proyecto.
- Se guarda en un archivo con extensión `.code-workspace`.

### **3.2 Crear y Configurar un Espacio de Trabajo**
1. **Abrir VSCode.**
2. **Agregar Carpetas:**
   - Ve a **File > Add Folder to Workspace...** y selecciona la carpeta del proyecto.
3. **Guardar el Espacio de Trabajo:**
   - Ve a **File > Save Workspace As...** y guarda el archivo (por ejemplo, `MiProyecto.code-workspace`).
4. **Editar la Configuración del Espacio de Trabajo:**
   - Abre el archivo `.code-workspace` y verás una estructura en JSON. Puedes agregar o modificar configuraciones específicas.  
     ```json
     {
       "folders": [
         {
           "path": "src"
         },
         {
           "path": "docs"
         }
       ],
       "settings": {
         "editor.tabSize": 2,
         "files.exclude": {
           "**/.git": true,
           "**/.DS_Store": true
         }
       }
     }
     ```
   - Esto te permite definir configuraciones como el tamaño de tabulación, exclusiones de archivos, y otras preferencias que se aplicarán solo a ese espacio de trabajo.

### **3.3 Extensiones y Configuración del Espacio de Trabajo**
- Puedes recomendar extensiones específicas para tu proyecto agregándolas al archivo de espacio de trabajo.
- Ve a **File > Preferences > Extensions > Recommended Extensions** y agrega aquellas que creas útiles para tu equipo o proyecto.

---

## **4. Actividad Práctica (40 min)**
### **Ejercicio 1: Instalación de VSCode**
- Instala VSCode en tu sistema (elige la guía según tu OS) y comparte una captura de pantalla del VSCode abierto.

### **Ejercicio 2: Configuración del Espacio de Trabajo**
- Crea un espacio de trabajo para un proyecto ficticio llamado **"MiProyecto"**.  
- Agrega al menos dos carpetas (por ejemplo, `src` y `tests`).
- Configura el archivo `.code-workspace` para establecer un tamaño de tabulación de 2 y excluir archivos temporales.

### **Ejercicio 3: Compartir Configuraciones**
- Investiga y comparte al menos tres configuraciones o extensiones recomendadas para mejorar el flujo de trabajo en VSCode.

---