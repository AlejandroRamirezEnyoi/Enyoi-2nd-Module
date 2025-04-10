
# Clase: Git y GitHub - Forks y Pull Requests

## 🧠 Diferencia entre Git y GitHub

- **Git**: Es un sistema de control de versiones distribuido. Se usa para rastrear cambios en el código fuente durante el desarrollo de software.
- **GitHub**: Es una plataforma basada en la web que utiliza Git como sistema de control de versiones. Permite la colaboración, revisión de código y gestión de proyectos.

## 🍴 ¿Qué es un Fork?

- Un **fork** es una copia de un repositorio que se crea en tu cuenta de GitHub.
- Te permite realizar cambios libremente sin afectar el repositorio original.
- Es común en proyectos de código abierto para proponer mejoras o solucionar errores.

### 🔧 ¿Cuándo usar un fork?

- Para colaborar con proyectos que no te pertenecen.
- Para experimentar sin afectar el repositorio original.
- Para proponer cambios a través de un **Pull Request**.

## 📥 Crear un Fork y Clonar el Repositorio

1. Ve al repositorio original en GitHub.
2. Haz clic en el botón **"Fork"** (parte superior derecha).
3. Una vez en tu cuenta, clona el fork:
   ```bash
   git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPOSITORIO.git
   ```

## 🔁 ¿Qué es un Pull Request?

- Un **Pull Request (PR)** es una solicitud para que los cambios en tu rama/fork sean revisados y, potencialmente, fusionados con el repositorio original.
- Es una herramienta clave en la colaboración en proyectos abiertos.

## 🔍 ¿Cuál es su propósito?

- Permite revisar, discutir y aprobar los cambios antes de fusionarlos.
- Mejora la calidad del código mediante la revisión por pares.

## 🛠️ Crear y Gestionar un Pull Request

1. Haz tus cambios en una rama del fork.
2. Empuja la rama al fork en GitHub:
   ```bash
   git push origin nombre-de-la-rama
   ```
3. Ve a GitHub y haz clic en **"Compare & pull request"**.
4. Añade un título, descripción y crea el PR.
5. Participa en la discusión y realiza cambios si se requieren.

## 💬 Discusión y Revisión de Código en Pull Requests

- Puedes comentar líneas específicas de código.
- Se pueden hacer sugerencias directamente.
- Permite la colaboración entre revisores y autores.

---

### Recursos Útiles:

- [Guía de Forks en GitHub](https://docs.github.com/es/get-started/quickstart/fork-a-repo)
- [Documentación de Pull Requests](https://docs.github.com/es/pull-requests)