# Guía de Deployment - Vterra

## Deploy en Vercel (Recomendado)

### Paso 1: Preparar el Repositorio

Tu repositorio ya está configurado correctamente para deployment público:

✅ Configuración de Sanity hardcoded (sin secretos)
✅ `.env.local` en `.gitignore`
✅ Build exitoso localmente

### Paso 2: Deploy en Vercel

#### Opción A: Desde el Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New..."** → **"Project"**
3. Importa tu repositorio de GitHub: `Kilafy/vterra`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. **NO necesitas configurar variables de entorno** (a menos que tu dataset sea privado)
6. Click en **"Deploy"**

#### Opción B: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Hacer login
vercel login

# Deploy
vercel

# Para production
vercel --prod
```

### Paso 3: Configuración Post-Deploy (Opcional)

#### Si tu Dataset de Sanity es PRIVADO:

1. Ve a tu proyecto en Vercel Dashboard
2. **Settings** → **Environment Variables**
3. Agrega:
   - **Key**: `SANITY_API_READ_TOKEN`
   - **Value**: Tu token de lectura de Sanity
   - **Environments**: Production, Preview, Development

Para obtener el token:
- Ve a https://www.sanity.io/manage
- Selecciona proyecto "ivoc1e3r"
- **API** → **Tokens** → **Add API Token**
- Nombre: "Vercel Read Token"
- Permisos: **Viewer**

4. **Redeploy** el proyecto después de agregar la variable

### Paso 4: Configurar Dominio (Opcional)

1. En Vercel Dashboard → Tu proyecto → **Settings** → **Domains**
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar DNS

## Deploy en Otros Servicios

### Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18.x or higher

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t vterra .
docker run -p 3000:3000 vterra
```

### VPS/Servidor Manual

```bash
# En tu servidor
git clone https://github.com/Kilafy/vterra.git
cd vterra

# Instalar dependencias
npm install

# Build
npm run build

# Instalar PM2 (gestor de procesos)
npm install -g pm2

# Iniciar con PM2
pm2 start npm --name "vterra" -- start

# Configurar para reinicio automático
pm2 startup
pm2 save
```

## Verificación Post-Deploy

Verifica que todo funcione correctamente:

- [ ] ✅ Homepage carga correctamente
- [ ] ✅ Imágenes se muestran (hero, propiedades, featured)
- [ ] ✅ `/properties` muestra el catálogo
- [ ] ✅ `/properties/[slug]` muestra detalles individuales
- [ ] ✅ Carrusel de imágenes funciona
- [ ] ✅ Modal fullscreen abre y cierra correctamente
- [ ] ✅ Cambio de idioma funciona (EN/ES)
- [ ] ✅ Filtros de propiedades funcionan
- [ ] ✅ `/studio` accesible (si lo necesitas público)

## Variables de Entorno

### Producción (Vercel/otros)

**NO SE REQUIEREN** si tu dataset de Sanity es público (configuración por defecto) ✅

**Solo si el dataset es privado:**
```
SANITY_API_READ_TOKEN=sk1234...  # Token de lectura de Sanity
```

### Desarrollo Local

Crea `.env.local` (ya incluido en `.gitignore`):

```bash
# Solo si el dataset es privado:
# SANITY_API_READ_TOKEN=tu_token_aquí
```

**Nota**: Ya no se usan `NEXT_PUBLIC_*` variables - los valores públicos están hardcoded en `src/sanity/client.ts`

## Troubleshooting

### Error: "Configuration must contain projectId"

**Causa**: Falló la carga de la configuración de Sanity

**Solución**:
1. Verifica que `src/sanity/client.ts` tenga los valores hardcoded:
   ```typescript
   export const config = {
     projectId: 'ivoc1e3r',
     dataset: 'production',
     apiVersion: '2024-01-01',
   }
   ```
2. Asegúrate de que el build no tenga errores de TypeScript
3. Limpia cache: `rm -rf .next && npm run build`

### Imágenes no cargan

**Causa**: Problema con Sanity CDN o configuración de imágenes

**Solución**:
1. Verifica en Sanity Studio que las propiedades tengan imágenes
2. Revisa que el dataset sea público o tengas el token configurado
3. Abre la consola del navegador y busca errores de red
4. Verifica URLs de imágenes: deben ser `https://cdn.sanity.io/images/ivoc1e3r/production/...`

### Build falla en producción pero funciona localmente

**Causa**: Diferencias entre ambiente local y producción

**Solución**:
1. Elimina `node_modules` y `.next`: `rm -rf node_modules .next`
2. Reinstala: `npm install`
3. Build limpio: `npm run build`
4. Verifica versión de Node.js: debe ser 18.x o superior

### Studio no es accesible después del deploy

**Causa**: Ruta `/studio` no configurada correctamente

**Solución**:
1. Verifica que `src/app/studio/[[...tool]]/page.tsx` exista
2. En Sanity.io, agrega tu dominio de Vercel a "CORS origins":
   - Ve a https://www.sanity.io/manage
   - Selecciona proyecto
   - **API** → **CORS origins**
   - Agrega: `https://tu-dominio.vercel.app`

## Optimizaciones de Rendimiento

### Configuradas por defecto:
- ✅ ISR (Incremental Static Regeneration): 60 segundos
- ✅ Sanity CDN activado en producción
- ✅ Next.js Image Optimization
- ✅ Static generation para rutas conocidas

### Mejoras opcionales:

**1. Configurar Revalidación por Webhook**

En Sanity Studio, configura webhooks para revalidar cuando publiques contenido:

```javascript
// En sanity.config.ts o Sanity dashboard
webhooks: [
  {
    name: 'Vercel Deploy',
    url: 'https://api.vercel.com/v1/integrations/deploy/...',
    on: ['create', 'update', 'delete'],
  }
]
```

**2. Analytics**

Agrega Vercel Analytics:

```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**3. Speed Insights**

```bash
npm install @vercel/speed-insights
```

```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

// En layout.tsx
<SpeedInsights />
```

## Monitoreo

### Logs en Vercel
- Dashboard → Tu proyecto → **Deployments** → Click en deployment → **Functions**

### Errores en Producción
- Dashboard → **Analytics** → **Errors** (si está habilitado)

### Performance
- Vercel Speed Insights (requiere instalación)
- Google Lighthouse (manual)

## Costos

### Vercel Hobby (Gratis)
- ✅ Ilimitados deployments
- ✅ 100 GB bandwidth
- ✅ Funciones serverless
- ✅ Dominios personalizados
- ✅ SSL automático

**Suficiente para este proyecto** ✅

### Sanity (Gratis)
- ✅ 3 usuarios
- ✅ 10,000 documentos
- ✅ 5 GB assets
- ✅ 10 GB bandwidth

**Suficiente para empezar** ✅

## Soporte

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **GitHub Issues**: https://github.com/Kilafy/vterra/issues

## Changelog

- **2025-11-03**: 
  - Configuración inicial de deployment
  - Migración de variables NEXT_PUBLIC_ a hardcoded values
  - Documentación de seguridad y deployment
  - Build exitoso sin variables de entorno requeridas
