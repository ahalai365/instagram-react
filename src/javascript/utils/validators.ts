type TValidator = (value: string) => boolean;

export type TValidators = {
  [fieldName: string]: {
    required?: TValidator;
    minLength?: TValidator;
    maxLength?: TValidator;
    validateUrl?: TValidator;
    validateEmail?: TValidator;
    passwordRepit?: TValidator;
  };
};

function required(value: string): boolean {
  return value === "";
}

function minLength(value: string): boolean {
  return value.length > 0 && value.length <= 3;
}

function maxLength(value: string): boolean {
  return value.length > 20;
}

function passwordRepit(value: string): boolean {
  let password: string = document.getElementById("password").value;

  if (value === password) {
    return false;
  }

  return true;
}

function validateUrl(value: string): boolean {
  if (value === "") {
    return false;
  }

  let res = value.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res === null;
}

function validateEmail(value: string): boolean {
  if (value === "") {
    return false;
  }

  let res = value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return res === null;
}

// Форма входа
export const signInValidator: TValidators = {
  email: {
    required,
    validateEmail,
  },

  password: {
    required,
  },

  passwordRepit: {
    required,
  },

  avatar: {
    required,
    validateUrl,
  },
};

// Форма регистрации
export const signUpValidator: TValidators = {
  name: {
    required,
    minLength,
    maxLength,
  },

  description: {
    required,
    maxLength,
  },

  email: {
    required,
    validateEmail,
  },

  password: {
    required,
  },

  passwordRepit: {
    required,
    passwordRepit,
  },

  avatar: {
    required,
    validateUrl,
  },
};
// Форма редактирования профиля
export const profileEditValidator: TValidators = {
  name: {
    required,
    minLength,
    maxLength,
  },

  description: {
    required,
    maxLength,
  },
}

// Форма добавления фотографии
export const addCardValidator: TValidators = {
  name: {
    required,
    minLength,
    maxLength,
  },

  url: {
    required,
    validateUrl,
  },
}