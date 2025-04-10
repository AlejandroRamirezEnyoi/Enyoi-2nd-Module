
# 🧠 Clase: Trabajo con Ramas en Git y Resolución de Conflictos

## ⏱ Duración: 2 horas  
- **Teoría (70%)**: 1h 20min  
- **Práctica (30%)**: 40min  

---

## 🧩 Parte 1: git checkout y git switch

### 📌 ¿Qué hacen?
- `git checkout`: permite cambiar de rama o restaurar archivos.
- `git switch`: más moderno y legible, solo se usa para cambiar de rama.

### ✅ Ejemplos
```bash
git checkout main
git switch develop
git checkout -b nueva-rama
git switch -c nueva-rama
```

---

## 🔀 Parte 2: git merge - Combinar cambios

### 📌 ¿Qué es?
Fusiona los cambios de una rama en otra.

### ✅ Pasos:
```bash
git checkout main
git merge feature
```

Si hay conflictos, Git lo indicará y deberás resolverlos.

---

## 🌿 Parte 3: Estrategias de trabajo con ramas

### 🛠 Flujo de trabajo: Feature-branch
1. Crear una nueva rama para cada funcionalidad:
   ```bash
   git checkout -b feature/login
   ```
2. Trabajar de forma aislada.
3. Merge a `main` o `develop` una vez terminada.

**Ventajas**:
- Trabajo paralelo sin sobrescribir código.
- Facilita revisiones y control de versiones.

---

## ⚔️ Parte 4: Conflictos en Git

### 🤯 ¿Qué es un conflicto?
Ocurre cuando Git no puede fusionar automáticamente cambios en un archivo porque ambas ramas modificaron las mismas líneas.

### 🔎 ¿Cómo identificarlos?
Al hacer merge, verás mensajes como:
```
Auto-merging archivo.js
CONFLICT (content): Merge conflict in archivo.js
```

El archivo tendrá marcas como:
```text
<<<<<<< HEAD
versión de main
=======
versión de feature
>>>>>>> feature
```

---

## 🛠 Parte 5: Resolviendo conflictos

### ✅ Pasos:
1. Abrir el archivo con conflicto.
2. Editar y conservar el contenido correcto.
3. Guardar y añadir los cambios:
   ```bash
   git add archivo.js
   git commit
   ```

---

## 👍 Buenas prácticas para evitar conflictos

- Comunica con el equipo qué parte del código estás trabajando.
- Haz pull frecuentemente (`git pull`).
- No trabajes mucho tiempo sin integrar.
- Mantén ramas pequeñas y funcionales.
- Usa `rebase` solo si sabes lo que haces.

---

## 🧪 Parte práctica sugerida (30-40 min)

### 🔧 Actividad:
1. Crear una rama `feature/texto`.
2. Hacer cambios en un archivo y hacer commit.
3. Cambiar a `main`, modificar lo mismo y hacer commit.
4. Intentar hacer `merge` y resolver el conflicto.