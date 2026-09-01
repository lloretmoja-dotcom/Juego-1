# 🌟 Atrapa Estrellas - Guía de Empaquetado

## Archivos incluidos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Juego completo (HTML + CSS + JS) |
| `package.json` | Dependencias de Node.js |
| `capacitor.config.ts` | Configuración de Capacitor |
| `src/admob.ts` | Servicio AdMob para anuncios |
| `android/app/src/main/AndroidManifest.xml` | Manifiesto Android |
| `android/app/build.gradle` | Configuración de build Android |
| `ios/App/Info.plist` | Configuración iOS |
| `ios/App/Podfile` | Dependencias iOS (CocoaPods) |
| `privacy.html` | Política de privacidad (subir a web) |

## Pasos rápidos para empaquetar

### 1. Instalar herramientas
```bash
# Instalar Node.js desde https://nodejs.org
# Instalar Android Studio (para Android)
# Instalar Xcode (para iOS, solo Mac)
# Instalar CocoaPods: sudo gem install cocoapods
```

### 2. Preparar proyecto
```bash
# Crear carpeta y entrar
mkdir atrapa-estrellas && cd atrapa-estrellas

# Copiar index.html, package.json y capacitor.config.ts aquí

# Instalar dependencias
npm install

# Inicializar Capacitor (si no está inicializado)
npx cap init
```

### 3. Añadir plataformas
```bash
# Android
npm install @capacitor/android
npx cap add android

# iOS (solo Mac)
npm install @capacitor/ios
npx cap add ios
```

### 4. Copiar archivos de configuración
- Copiar `AndroidManifest.xml` a `android/app/src/main/`
- Copiar `build.gradle` a `android/app/`
- Copiar `Info.plist` a `ios/App/App/`
- Copiar `Podfile` a `ios/App/`

### 5. Sincronizar
```bash
npx cap sync
```

### 6. Compilar Android
```bash
cd android
./gradlew bundleRelease   # Genera .aab para Play Store
./gradlew assembleRelease # Genera .apk para pruebas
```

### 7. Compilar iOS
```bash
npx cap open ios
# En Xcode: Product → Archive → Distribute App
```

## Configuración de AdMob

1. Crear cuenta en https://admob.google.com
2. Añadir aplicación → Marcar "Diseñada para familias"
3. Crear unidades de anuncio (Banner y Recompensado)
4. Reemplazar `ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX` en todos los archivos
5. En AndroidManifest.xml y Info.plist, reemplazar el APPLICATION_ID

## Publicación en tiendas

### Google Play Console
- Marcar: "Diseñada principalmente para niños"
- Aplicar a "Designed for Families"
- Clasificación: PEGI 3
- Política de privacidad: subir privacy.html a tu web y poner el enlace

### App Store Connect
- Marcar: "Made for Kids"
- Clasificación: 4+
- No incluir analytics de terceros
- No incluir compras in-app sin control parental

## ⚠️ IMPORTANTE

- Reemplaza `com.tuempresa.atrapaestrellas` por tu Bundle ID real
- Reemplaza los IDs de AdMob por los tuyos
- Cambia `TU_PASSWORD_AQUI` en capacitor.config.ts
- Genera tu propio keystore para firmar Android
- Sube privacy.html a tu dominio web
