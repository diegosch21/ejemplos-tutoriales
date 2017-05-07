import { AuthConfig } from 'angular2-jwt';
import { Storage } from '@ionic/storage';

/* Constantes globales */

// export const API_ROOT_URL = 'http://localhost:8100/api'; // Usa proxy Ionic para evitar error CORS
export const API_ROOT_URL = 'http://api.consorcioabierto.local';
export const JWT_NAME = 'tutorial-ionic2-auth-token';

let storage = new Storage();
export const auth_http_config = new AuthConfig({
    tokenName: JWT_NAME,
    tokenGetter: (() => storage.get(JWT_NAME))
});