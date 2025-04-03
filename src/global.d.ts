import { Analytics } from 'firebase/analytics';

declare global {
  interface Window {
    analytics?: Analytics; // Define que 'analytics' pode existir no objeto window
  }
}