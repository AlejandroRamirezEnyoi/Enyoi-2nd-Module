## 🔍 git status: Ver el estado de los cambios
Muestra qué archivos han cambiado, cuáles están en staging, y cuáles aún no han sido añadidos.

```bash git status ```

## 📦 git add: Añadir archivos al área de staging
Prepara archivos para ser confirmados. Puedes añadir uno, varios o todos los archivos modificados.

```bash 
git add nombre_archivo 
git add . 
```

## ✅ git commit: Confirmar cambios con mensaje
Guarda una instantánea del estado actual del proyecto con un mensaje descriptivo.

```bash 
git commit -m "Descripción clara del cambio realizado" 
```

## 🗂️ Diferencias entre área de trabajo, staging y repositorio
### Área de trabajo (working directory): Archivos que estás editando.

### Staging Area (índice): Archivos que han sido añadidos con git add y están listos para ser confirmados.

### Repositorio (local): Donde se guardan los commits confirmados con git commit.

## 🌐 Trabajando con repositorios remotos
### 📥 git clone: Clonar un repositorio remoto
```bash 
git clone https://github.com/usuario/repositorio.git 
```

### Añadir remote:
```bash
git remote add <alias> <url-del-repositorio>
```

### 🔄 git pull vs git fetch
### git fetch: 
Descarga los cambios del remoto pero no los fusiona automáticamente.

### git pull: 
Hace un fetch y luego un merge, integrando los cambios remotos a tu rama actual.

```bash 
git fetch origin git pull origin main 
```

### 🚀 git push: Enviar cambios locales al repositorio remoto
```bash 
git push origin main 
```

### 🌱 Concepto de ramas y su importancia
Las ramas permiten desarrollar funcionalidades de forma aislada sin afectar el código principal.

main: Rama principal.

feature/*: Para nuevas funcionalidades.

bugfix/*: Para solucionar errores.

```bash 
git branch nombre-rama git checkout nombre-rama 
# o si prefieres:
git checkout -b nombre-rama
```

## 🛠️ Práctica (70%)
### Actividades propuestas
Crea un proyecto simple con un archivo README.md.

Inicializa un repositorio con git init.

Crea y edita archivos.

Usa git status, add y commit para versionarlos.

Crea una cuenta en GitHub y sube el proyecto con git remote, push.

Crea una rama nueva para agregar un archivo nuevo.

Haz commit desde esa rama y súbela.

Cambia de rama y haz merge hacia main.

Simula el trabajo colaborativo usando fetch y pull.

