import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progBarSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
