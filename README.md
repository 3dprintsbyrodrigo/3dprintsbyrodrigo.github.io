# 3D Prints by Rodrigo

Sitio web para mostrar proyectos de impresión 3D.

## Galería Automática

La galería en `galeria.html` se genera automáticamente a partir de las imágenes en la carpeta `imagenes/`.

### Cómo agregar nuevos proyectos:
1. Agrega las imágenes (jpg, png, svg, etc.) a la carpeta `imagenes/`.
2. Haz commit y push al repositorio.
3. Una GitHub Action actualizará automáticamente `galeria.html` con las nuevas imágenes.

### Prueba local:
- Instala Node.js si no lo tienes.
- Ejecuta `node generate-gallery.js` para actualizar la galería localmente.

## Despliegue
Este sitio usa GitHub Pages. Asegúrate de que esté habilitado en la configuración del repositorio.