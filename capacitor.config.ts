import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuempresa.atrapaestrellas',
  appName: 'Atrapa Estrellas',
  webDir: '.',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#87CEEB',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP'
    }
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'atrapaestrellas',
      keystorePassword: 'TU_PASSWORD_AQUI',
      keystoreAliasPassword: 'TU_PASSWORD_AQUI'
    }
  }
};

export default config;