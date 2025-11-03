# Configuración de Seguridad - Sanity CMS

## Resumen de Cambios

Hemos optimizado la configuración de Sanity para mejorar la seguridad eliminando las variables de entorno `NEXT_PUBLIC_*` y usando valores hardcoded en su lugar.

## ¿Por qué es seguro?

### Valores Públicos (Hardcoded)
Los siguientes valores están **diseñados para ser públicos** por Sanity:

- **projectId**: `ivoc1e3r` - Es público, aparece en las URLs del CDN de Sanity
- **dataset**: `production` - Es público por defecto en Sanity
- **apiVersion**: `2024-01-01` - Solo es una fecha de versión de la API

Estos valores son **seguros de exponer** porque:
1. Son parte de la arquitectura de Sanity CMS
2. El control de acceso real está en las reglas GROQ de Sanity Studio
3. El dataset "production" es público por defecto (cualquiera puede leer)
4. Solo se puede escribir/modificar datos con tokens de autenticación

### Valores Privados (Variables de Entorno)
Solo necesitas configurar en Vercel (si tu dataset es privado):

```
SANITY_API_READ_TOKEN=tu_token_aquí
```

**⚠️ IMPORTANTE:** Solo usa el token si tu dataset es privado y requiere autenticación para lectura.

## Configuración en Vercel

### Opción 1: Dataset Público (Recomendado)
**No necesitas configurar ninguna variable de entorno en Vercel** 🎉

Tu dataset actual está configurado como público, así que el deployment funcionará sin configuración adicional.

### Opción 2: Dataset Privado
Si cambias tu dataset a privado en Sanity, necesitas:

1. Ir a **Vercel Dashboard** → Tu proyecto → **Settings** → **Environment Variables**
2. Agregar:
   ```
   SANITY_API_READ_TOKEN = tu_token_aquí
   ```
3. Aplicar a: **Production**, **Preview**, y **Development**

**Para obtener el token:**
1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto "ivoc1e3r"
3. Ve a **API** → **Tokens**
4. Crea un token con permisos de **Viewer** (solo lectura)

## Archivos Modificados

### `src/sanity/client.ts`
```typescript
// Valores públicos ahora están hardcoded
export const config = {
  projectId: 'ivoc1e3r',
  dataset: 'production',
  apiVersion: '2024-01-01',
} as const

export const client = createClient({
  ...config,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN, // Solo esto es sensible
})
```

### `.env.local`
Ya no necesita las variables `NEXT_PUBLIC_*`:
```bash
# Solo si el dataset es privado:
# SANITY_API_READ_TOKEN=tu_token_aquí
```

### `.gitignore`
```
.env*
!.env.example  # Permite commitear .env.example
```

## Verificación de Seguridad

✅ **No hay secretos en el código fuente**
- Los valores públicos están hardcoded (seguro por diseño de Sanity)
- Las credenciales privadas solo en variables de entorno

✅ **Repositorio público seguro**
- `.env.local` está en `.gitignore`
- `.env.example` solo contiene comentarios (sin valores)

✅ **Build funciona correctamente**
- Probado localmente con `npm run build`
- No requiere variables de entorno para funcionar

✅ **Control de acceso apropiado**
- Lectura: Pública (cualquiera puede leer propiedades)
- Escritura: Protegida por Sanity Studio (requiere login)
- Modificación: Solo usuarios autorizados en Sanity

## Próximos Pasos

1. **Commit y Push**:
   ```bash
   git add .
   git commit -m "security: hardcode public Sanity config, remove NEXT_PUBLIC_ vars"
   git push
   ```

2. **Deploy en Vercel**:
   - Si tu dataset es público: Deploy automáticamente ✅
   - Si tu dataset es privado: Agregar `SANITY_API_READ_TOKEN` en Vercel

3. **Verificar**:
   - Revisa que el sitio cargue correctamente
   - Verifica que las imágenes se muestren
   - Comprueba que las propiedades se listen correctamente

## Preguntas Frecuentes

### ¿Por qué no usar variables de entorno para todo?
Las variables `NEXT_PUBLIC_*` se incluyen en el bundle del navegador, exponiendo los valores de todos modos. Hardcodear valores públicos es más limpio y explícito.

### ¿Qué pasa si alguien ve mi projectId?
Es totalmente normal y esperado. El projectId es parte de las URLs públicas de Sanity CDN. El control de acceso está en el backend de Sanity, no en el projectId.

### ¿Cómo protejo mi contenido?
1. **Para lectura**: Haz el dataset privado en Sanity y usa un token
2. **Para escritura**: Ya está protegido por autenticación de Sanity Studio
3. **Para reglas avanzadas**: Configura GROQ permissions en Sanity

### ¿Y si necesito diferentes configuraciones por ambiente?
Para staging/preview puedes crear un nuevo dataset en Sanity (ej: "staging") y cambiar el valor hardcoded en una rama separada.

## Referencias
- [Sanity Security Best Practices](https://www.sanity.io/docs/security)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
