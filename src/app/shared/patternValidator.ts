import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
export function PatternValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
    }
}