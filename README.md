# Ruah — Devocionario Católico

App web progresiva (PWA) de oraciones católicas para Ruah Papelería Cristiana.

---

## Cómo subir a Vercel (paso a paso)

### 1. Instalar Node.js
Descarga e instala Node.js desde https://nodejs.org (versión LTS recomendada).

### 2. Crear cuenta en Vercel
Ve a https://vercel.com y crea una cuenta gratuita (puedes entrar con Google o GitHub).

### 3. Instalar Vercel CLI
Abre el terminal (en Mac: Aplicaciones > Terminal / en Windows: símbolo del sistema) y escribe:
```
npm install -g vercel
```

### 4. Entrar en la carpeta del proyecto
```
cd ruta/a/ruah-app
```

### 5. Instalar dependencias
```
npm install
```

### 6. Construir la app
```
npm run build
```

### 7. Subir a Vercel
```
vercel --prod
```
La primera vez te pedirá que inicies sesión y confirmes el proyecto. Sigue las instrucciones en pantalla.

Al terminar, Vercel te dará una URL pública como:
**https://ruah-oraciones.vercel.app**

---

## Dominio personalizado (opcional)
Si quieres usar ruah.es o similar, en el panel de Vercel puedes añadirlo en:
Proyecto > Settings > Domains

---

## Actualizar la app
Cada vez que quieras cambiar algo:
1. Modifica los archivos
2. Ejecuta `npm run build`
3. Ejecuta `vercel --prod`

---

## Añadir icono de la app (recomendado)
Coloca dos imágenes PNG del logo de Ruah en la carpeta `public/`:
- `icon-192.png` (192×192 px)
- `icon-512.png` (512×512 px)

Así cuando alguien instale la app en su móvil verá el logo de Ruah.

---

## Cómo instalar en el móvil (para los usuarios)

**Android (Chrome):**
1. Abrir la URL en Chrome
2. Menú (⋮) > "Añadir a pantalla de inicio"

**iPhone (Safari):**
1. Abrir la URL en Safari
2. Pulsar el botón compartir (□↑)
3. "Añadir a pantalla de inicio"

---

Desarrollado para Ruah Papelería Cristiana.
