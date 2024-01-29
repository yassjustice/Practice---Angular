import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path: "", component: FormComponent
    },
    {
        path: "welcome", component: WelcomeComponent
    }
];
