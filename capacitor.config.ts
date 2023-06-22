import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.erp_frontendv01.com',
  appName: 'erp_frontend',
  webDir: 'build',
  server: {
    url:'http://192.168.1.2:3000',
    cleartext: true
  }
};

export default config;
