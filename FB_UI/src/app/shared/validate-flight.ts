import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator to check:
 * - Flight number must be at least 3 characters
 * - Must contain only letters and numbers
 */
export function validateFlight(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null; // Don't validate empty values; use 'required' validator separately
    }

    const isValidFormat = /^[A-Za-z0-9]+$/.test(value);
    const isLongEnough = value.length >= 3;

    if (!isValidFormat) {
      return { invalidFormat: 'Flight number must contain only letters and numbers' };
    }

    if (!isLongEnough) {
      return { tooShort: 'Flight number must be at least 3 characters long' };
    }

    return null; // Valid input
  };
}