export const validateEmail = (email: string) => {
  const emailRegexp = /\S+@\S+\.\S+/;

  return emailRegexp.test(email) && email.length > 0;
};

export const validatePassword = (password: string) => {
  const lettersRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const lengthRegExp = /.{5,}/;

  const hasLetters = lettersRegExp.test(password.toLowerCase());
  const hasDigits = digitsRegExp.test(password);
  const hasLength = lengthRegExp.test(password)

  return (hasLetters || hasDigits) && hasLength;
};

export const validateName = (name: string) => name.length > 1 && name.length <= 15
