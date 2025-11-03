# 🎨 Sanity Studio - Guía de Uso

## ✅ Studio Desplegado Exitosamente

Tu Sanity Studio está disponible en **dos ubicaciones**:

### 1. Studio Dedicado (Sanity Hosting)
🔗 **URL**: https://vterra.sanity.studio/

**Ventajas:**
- URL fácil de recordar
- Independiente de tu sitio web
- Ideal para compartir con el equipo
- Siempre disponible

### 2. Studio Integrado (En tu sitio)
🔗 **URL**: https://[tu-dominio].vercel.app/studio

**Ventajas:**
- Todo en un solo lugar
- Mismo dominio que tu sitio
- Sin necesidad de recordar otra URL

---

## 🔐 Acceso al Studio

### Iniciar Sesión
1. Ve a cualquiera de las URLs del Studio
2. Haz clic en **"Sign in"**
3. Usa tu cuenta de GitHub (ya configurada)

### Permisos
- **Administrator**: Puede crear, editar y eliminar todo
- **Editor**: Puede crear y editar contenido
- **Viewer**: Solo puede ver contenido

Para agregar usuarios:
1. Ve a https://www.sanity.io/manage
2. Selecciona proyecto "vterra-studio"
3. **Members** → **Invite members**

---

## 📝 Gestión de Propiedades

### Crear Nueva Propiedad

1. **Ir a "Property"** en el menú lateral
2. **Click en "+ Create"**
3. Completa los campos:

#### Información Básica
- **Title (EN)**: Título en inglés
- **Title (ES)**: Título en español
- **Slug**: URL amigable (ej: `luxury-apartment-miami`)
- **Type**: Tipo de propiedad (Condominium, Villa, etc.)

#### Descripción
- **Description (EN)**: Descripción completa en inglés
- **Description (ES)**: Descripción completa en español

#### Precios y Detalles
- **Price**: Precio en USD (ej: 1500000)
- **Bedrooms**: Número de habitaciones
- **Bathrooms**: Número de baños
- **Area**: Área en pies cuadrados (ej: 2500)
- **Parking**: Tiene parqueadero (Sí/No)

#### Ubicación
- **Country**: País
- **State**: Estado/provincia (opcional)
- **City**: Ciudad
- **Address**: Dirección específica

#### Imágenes
1. Click en **"Upload"** o arrastra imágenes
2. Agrega múltiples imágenes (primera será la principal)
3. Opcionalmente agrega captions en inglés y español

#### Featured
- **Is Featured?**: Marcar para mostrar en homepage

4. **Click "Publish"** cuando termines

### Editar Propiedad Existente

1. Busca la propiedad en la lista
2. Click para abrir
3. Edita los campos necesarios
4. **Click "Publish"** para guardar cambios

### Eliminar Propiedad

1. Abre la propiedad
2. Click en "..." (menú)
3. **Delete**
4. Confirma la eliminación

---

## 🖼️ Gestión de Imágenes

### Subir Imágenes

**Métodos:**
1. **Drag & Drop**: Arrastra imágenes al campo
2. **Upload**: Click en "Upload" y selecciona archivo(s)
3. **Browse**: Selecciona de imágenes ya subidas

**Recomendaciones:**
- **Formato**: JPG o PNG
- **Tamaño**: Mínimo 1920x1080px para mejor calidad
- **Peso**: Optimiza antes de subir (< 2MB por imagen)
- **Ratio**: Preferiblemente 16:10 o 16:9

### Organizar Galería

**Orden de Imágenes:**
1. Arrastra y suelta para reordenar
2. La primera imagen es la **principal** (portada)
3. Las demás aparecen en el carrusel

**Captions:**
- Agrega descripción en inglés
- Agrega descripción en español
- Aparecerán en el carrusel (opcional)

### Eliminar Imágenes

1. Click en la "X" de la imagen
2. Confirma la eliminación
3. **Publish** para guardar cambios

---

## 🔄 Actualización del Sitio

### ISR (Incremental Static Regeneration)

Tu sitio usa ISR con **60 segundos de revalidación**:

**¿Qué significa?**
- Cambios en Sanity aparecen en el sitio en **máximo 60 segundos**
- No necesitas hacer nada especial
- El sitio se actualiza automáticamente

**Forzar Actualización Inmediata:**
1. Ve a tu sitio en Vercel
2. Haz un **redeploy** manual
3. O espera 60 segundos

### Verificar Cambios

1. Haz cambios en Studio
2. Click **"Publish"**
3. Espera 60 segundos
4. Refresca tu sitio (Ctrl+F5 / Cmd+Shift+R)
5. Los cambios deberían estar visibles

---

## 🛠️ Comandos Útiles

### Desplegar Studio (Actualizar)

Cuando hagas cambios en el código del Studio:

```bash
npm run studio:deploy
```

Esto actualiza: https://vterra.sanity.studio/

### Desarrollo Local del Studio

Para probar cambios antes de desplegar:

```bash
npm run dev
```

Luego ve a: http://localhost:3000/studio

---

## 📊 Vision Tool

Sanity Vision está habilitado para hacer consultas GROQ:

### Acceder a Vision
1. En el Studio, busca **"Vision"** en el menú
2. O agrega `/vision` a la URL del Studio

### Ejemplos de Consultas GROQ

**Ver todas las propiedades:**
```groq
*[_type == "property"]
```

**Propiedades featured:**
```groq
*[_type == "property" && isFeatured == true]
```

**Propiedades por tipo:**
```groq
*[_type == "property" && type == "villa"]
```

**Propiedades con precio:**
```groq
*[_type == "property"] | order(price desc)
```

---

## 🚨 Troubleshooting

### No veo mis cambios en el sitio

**Solución:**
1. Verifica que hiciste **"Publish"** (no solo guardar)
2. Espera 60 segundos para ISR
3. Refresca con Ctrl+F5 (limpia caché)
4. Verifica en modo incógnito

### Las imágenes no cargan

**Solución:**
1. Verifica que subiste la imagen correctamente
2. Asegúrate de que está en el campo "Images"
3. Haz "Publish" después de agregar imágenes
4. Revisa la consola del navegador para errores

### Error al publicar

**Solución:**
1. Revisa que todos los campos requeridos estén llenos
2. Verifica que el slug sea único
3. Intenta refrescar el Studio
4. Si persiste, contacta soporte

### Studio no carga

**Solución:**
1. Verifica tu conexión a internet
2. Limpia caché del navegador
3. Intenta en modo incógnito
4. Verifica que estás autenticado

---

## 📱 Uso en Móvil

El Studio de Sanity funciona en móviles:

**Navegadores compatibles:**
- Chrome (Android)
- Safari (iOS)
- Edge (cualquier plataforma)

**Limitaciones:**
- Edición de texto más difícil
- Subir imágenes funciona bien
- Mejor experiencia en tablet/desktop

---

## 🔒 Seguridad

### Buenas Prácticas

1. **No compartas tu contraseña**
2. **Usa autenticación de dos factores** (en Sanity.io)
3. **Revisa cambios antes de publicar**
4. **Haz backups** de contenido importante
5. **Limita permisos** de usuarios nuevos

### Historial de Cambios

Sanity guarda historial de todos los cambios:

1. Abre un documento
2. Click en el ícono de reloj (History)
3. Ve todas las versiones anteriores
4. Restaura si es necesario

---

## 📞 Soporte

### Recursos
- **Sanity Docs**: https://www.sanity.io/docs
- **Vision Guide**: https://www.sanity.io/docs/the-vision-plugin
- **GROQ Cheatsheet**: https://www.sanity.io/docs/query-cheat-sheet

### Contacto
- **Sanity Support**: https://www.sanity.io/help
- **Slack Community**: https://slack.sanity.io/

---

## 🎯 Próximos Pasos

1. ✅ Familiarízate con la interfaz
2. ✅ Crea tu primera propiedad de prueba
3. ✅ Sube algunas imágenes
4. ✅ Publica y verifica en el sitio
5. ✅ Invita a miembros del equipo
6. ✅ Configura roles y permisos

---

¡Listo! Ahora tienes todo lo necesario para gestionar el contenido de Vterra 🏡✨
