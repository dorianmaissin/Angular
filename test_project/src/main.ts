import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Load the main component
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
