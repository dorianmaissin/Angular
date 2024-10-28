import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/App/app.component';
import { appConfig } from './app/components/App/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
