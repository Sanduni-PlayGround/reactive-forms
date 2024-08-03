import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidators {

  static customerName():ValidatorFn{
    function validator (control: AbstractControl): ValidationErrors | null{
      const name = control.value;
      if(!name) return null;
      const errors: ValidationErrors = {};

      if(!name.trim().length){
        errors['required'] = true;
      }

      if(!/^[A-Za-z ]+$/.test(name)){
        errors['pattern'] = true;
      }

      if(name.trim().length < 3){
        errors['minlength'] = true;
      }

      return errors;
    }
    return validator;
  }
}
