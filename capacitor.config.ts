import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vingo.app',
  appName: 'vingo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
