import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hvannia.indyapp',
  appName: 'capacitor-app-b',
  webDir: 'dist',
      // added
      server: {
        url:'http://0.0.0.0:5173'
      }
};

export default config;
