# 💻 Clase: Introducción a Git y Sistemas de Control de Versiones

## 🎯 Objetivos
- Comprender qué es un sistema de control de versiones.
- Conocer los beneficios de su uso.
- Distinguir entre sistemas centralizados y distribuidos.
- Aprender a instalar y configurar Git.
- Iniciar un repositorio con `git init`.

---

## 🧠 ¿Qué es un Sistema de Control de Versiones (VCS)?

Un **VCS** es una herramienta que permite:
- Hacer seguimiento a los cambios realizados en archivos (principalmente de código).
- Registrar quién hizo qué cambio y cuándo.
- Revertir el proyecto a estados anteriores si algo sale mal.

📂 Ejemplo:  
Guardar múltiples versiones de un archivo sin tener que duplicarlo como `archivo_v1`, `archivo_v2`, etc.

---

## ✅ Beneficios de Usar un VCS

- 🕓 **Historial completo** de cambios.
- 🧑‍🤝‍🧑 **Colaboración eficiente** entre varios desarrolladores.
- ⏪ **Revertir cambios** fácilmente.
- 🔄 **Ramas** para trabajar en nuevas funciones sin afectar el código principal.
- 🔍 Trazabilidad de errores.

---

## 📌 Historial, Colaboración y Reversión

- Git guarda cada cambio como una **instantánea**.
- Puedes ver quién cambió qué línea y cuándo.
- Posibilidad de revertir a una versión estable del proyecto.

---

## 🔄 Control de Versiones Centralizado vs Distribuido

| Característica | Centralizado (CVCS) | Distribuido (DVCS) |
|----------------|---------------------|---------------------|
| Ejemplos       | SVN, Perforce       | Git, Mercurial      |
| Repositorio    | Único servidor central | Cada usuario tiene una copia completa |
| Conectividad   | Requiere conexión constante | Puede trabajar offline |
| Seguridad      | Vulnerable a fallos del servidor central | Menos riesgo de pérdida total |

---

## 🧩 Instalación de Git

### 🔗 Enlaces de descarga:

- [Windows](https://git-scm.com/download/win)
- [macOS](https://git-scm.com/download/mac)
- [Linux (Ubuntu)](https://git-scm.com/download/linux)

```bash
# En Ubuntu
sudo apt update
sudo apt install git
```

---

## ⚙️ Configuración Inicial de Git

Configura tu identidad globalmente:

```bash
git config --global user.name `Tu Nombre`
git config --global user.email `tu.email@ejemplo.com`
```

---

### ✨ Alias útiles

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
```

---

### 📝 Configurar editor por defecto

```bash
git config --global core.editor "code --wait"
```

---

## 📁 `git init`: Inicializar un repositorio

```bash
mkdir mi_proyecto
cd mi_proyecto
git init
```

Esto crea una carpeta `.git` que contiene el historial del repositorio.

---

## 🧪 Práctica (30%)

### ✅ Ejercicio 1:
1. Crea una carpeta nueva llamada `mi_proyecto_git`.
2. Inicializa el repositorio con `git init`.
3. Crea un archivo `README.md`.
4. Usa `git status` y `git add` para preparar el archivo.
5. Haz tu primer commit:  
   ```bash
   git commit -m "Primer commit"
   ```

---

## 📚 Recursos Útiles

- [Pro Git Book (gratuito)](https://git-scm.com/book/es/v2)
- [Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Learning Lab](https://lab.github.com)

---

## 📌 Cierre

Git es una herramienta fundamental para el trabajo colaborativo y seguro en desarrollo de software. Dominar los conceptos básicos como `git init`, commits, y configuración, sienta las bases para flujos de trabajo más avanzados.

