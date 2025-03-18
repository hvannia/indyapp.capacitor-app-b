import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hvannia.indyapp',
  appName: 'capacitor-app-b',
  webDir: 'dist',
      // added
      server: {
        url: 'http://localhost:5173',
        cleartext:true
      }
};

export default config;
