import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError) {
  const validationErrors: Error = {};

  error.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}