import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILoginItem } from '../models/login-Item.definition';

@Injectable({ providedIn: 'root' })

export class LoginItemFormService {

  constructor(private readonly fb: FormBuilder) {}

  buildForm(data?: ILoginItem): FormGroup {
    const form = this.fb.group({
			Name : String,
            Password: String
    });

    if (data) {
      this.patchForm(form, data);
      form.markAsPristine();
    }

    return form;
  }

  patchForm(form: FormGroup, data: ILoginItem): void {
    const dataToPatch = {
      ...data,
    };
    form.patchValue(dataToPatch);
  }

  // we need this as form.enable(), enables all the fields and
  // form.reset() does not work as expected in our scenario
//   enableForm(form: FormGroup) {
//     form.enable();
//     this.readonlyFields.forEach((key) => form.controls[key].disable());
//   }

  disableForm(form: FormGroup) {
    form.disable();
  }

}
