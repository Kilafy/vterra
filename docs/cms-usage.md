# Guía de Uso del CMS de Sanity - Vterra

## ✅ Integración Completada

La integración de Sanity CMS ha sido completada exitosamente. Ahora el proyecto obtiene todas las propiedades desde Sanity en lugar de usar datos estáticos.

## 🎯 Lo que se ha Integrado

### 1. **Página de Catálogo de Propiedades** (`/properties`)
- ✅ Obtiene todas las propiedades desde Sanity
- ✅ Sistema de filtros funcional (tipo, ubicación, precio, habitaciones, baños, área, parqueadero)
- ✅ Búsqueda por texto
- ✅ Soporte bilingüe (EN/ES)
- ✅ ISR (Incremental Static Regeneration) - se actualiza cada 60 segundos
- ✅ Muestra imágenes desde Sanity con optimización automática

### 2. **Página de Detalle de Propiedad** (`/properties/[slug]`)
- ✅ Obtiene propiedad específica por slug desde Sanity
- ✅ Genera rutas estáticas para todas las propiedades (SSG + ISR)
- ✅ Muestra descripción enriquecida usando Portable Text
- ✅ Galería de imágenes
- ✅ Lista de amenidades
- ✅ Información completa bilingüe
- ✅ Página 404 si la propiedad no existe

## 📝 Cómo Agregar una Nueva Propiedad

1. **Accede al Studio de Sanity:**
   - Local: http://localhost:3000/studio
   - Producción: https://vterra.sanity.studio (después de desplegar)

2. **Inicia sesión** con tu cuenta de Sanity

3. **Crea una nueva Property:**
   - Click en "Property" en el menú lateral
   - Click en "Create" o el botón "+"

4. **Completa los Campos Requeridos:**
   - ✅ **Title (English)**: Título en inglés
   - ✅ **Title (Spanish)**: Título en español
   - ✅ **Slug**: URL amigable (se genera automáticamente, pero puedes editarlo)
   - ✅ **Type**: Tipo de propiedad (Condominium, Villa, House, Penthouse, Apartment, Commercial)
   - ✅ **Status**: Estado (For Sale, For Rent, Sold)
   - ✅ **Price**: Precio en USD
   - ✅ **Location**:
     - City: Ciudad
     - State: Estado/Departamento (opcional)
     - Country: País
     - Address: Dirección completa (opcional)

5. **Agrega Detalles de la Propiedad:**
   - **Bedrooms**: Número de habitaciones (0 para estudios/comerciales)
   - **Bathrooms**: Número de baños
   - **Area**: Área en pies cuadrados (sq ft)
   - **Parking**: ¿Tiene parqueadero? (Sí/No)

6. **Sube Imágenes:**
   - Click en "Add Images"
   - Arrastra o selecciona imágenes
   - Para cada imagen puedes agregar:
     - Caption (English): Descripción en inglés
     - Caption (Spanish): Descripción en español

7. **Escribe la Descripción:**
   - **Description (English)**: Editor de texto enriquecido para descripción en inglés
   - **Description (Spanish)**: Editor de texto enriquecido para descripción en español
   - Puedes usar:
     - Negritas
     - Cursivas
     - Listas
     - Bloques de código
     - Links

8. **Agrega Amenidades** (opcional):
   - Click en "Add Amenities"
   - Escribe cada amenidad (ej: "Pool", "Gym", "Security 24/7")
   - Puedes agregar tantas como necesites

9. **Configuración Adicional** (opcional):
   - **Featured**: Marca si quieres que aparezca destacada
   - **Priority**: Número de orden de visualización (menor = primero)
   - **SEO**:
     - Meta Title (EN/ES)
     - Meta Description (EN/ES)
     - Meta Keywords (opcional)

10. **Publica:**
    - Click en "Publish" en la esquina superior derecha
    - ¡Listo! La propiedad estará visible en el sitio en máximo 60 segundos

## 🔄 Actualizar una Propiedad Existente

1. Accede al Studio
2. Click en "Property" en el menú
3. Busca y selecciona la propiedad que quieres editar
4. Haz los cambios necesarios
5. Click en "Publish" para guardar

## 🗑️ Eliminar una Propiedad

1. Accede al Studio
2. Click en "Property" en el menú
3. Selecciona la propiedad
4. Click en el menú "•••" (tres puntos)
5. Selecciona "Delete"
6. Confirma la eliminación

## 🎨 Características Técnicas

### ISR (Incremental Static Regeneration)
- Las páginas se regeneran cada 60 segundos
- Esto significa que los cambios en Sanity aparecerán en el sitio en máximo 1 minuto
- Las páginas siguen siendo rápidas porque están pre-generadas

### Optimización de Imágenes
- Las imágenes de Sanity se optimizan automáticamente
- Se generan en diferentes tamaños según el dispositivo
- Carga lazy (perezosa) para mejor rendimiento

### Búsqueda y Filtros
- Funciona en el cliente (rápido, sin recargas)
- Busca por título, ciudad o país
- Filtra por múltiples criterios simultáneamente

## 🚀 Despliegue del Studio a Producción

Cuando estés listo para tener el Studio en producción:

```bash
npm run studio:deploy
```

Esto desplegará el Studio en: `https://vterra.sanity.studio`

## 📊 Datos de Prueba

Ya tienes 1 apartamento de prueba creado en Sanity. Puedes:
- Ver cómo aparece en `/properties`
- Ver su detalle en `/properties/[slug]`
- Editarlo para practicar
- Crear más propiedades usando ese como plantilla

## 🆘 Solución de Problemas

### La propiedad no aparece en el sitio
- Verifica que esté publicada (botón "Publish" en Sanity)
- Espera hasta 60 segundos para que se actualice
- Recarga la página con Ctrl+Shift+R (fuerza actualización)

### Las imágenes no se cargan
- Verifica que las imágenes estén subidas en Sanity
- Asegúrate de que el campo "images" tenga al menos una imagen

### Error 404 en la página de detalle
- Verifica que el slug sea correcto
- Asegúrate de que la propiedad esté publicada

## 📚 Recursos Adicionales

- [Documentación de Sanity](https://www.sanity.io/docs)
- [GROQ Query Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## 🎉 ¡Listo para Usar!

Tu CMS está completamente funcional y listo para gestionar las propiedades de Vterra. Puedes crear, editar y eliminar propiedades fácilmente desde el Studio de Sanity.
