import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { FormComponent } from './app/form/form.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);
// const bootstrap = () => bootstrapApplication(FormComponent, config);

export default bootstrap;
