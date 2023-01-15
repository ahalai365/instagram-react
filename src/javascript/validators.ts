type TValidator = (
  value: string,
  formValues?: { password: string } | undefined
) => boolean;

export type TValidators = {
  [fieldName: string]: {
    required?: TValidator;
    minLength?: TValidator;
    maxLength?: TValidator;
    validateUrl?: TValidator;
    validateEmail?: TValidator;
    passwordRepit?: TValidator;
    validateRegExp?: TValidator;
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

function passwordRepit(
  value: string,
  formValues?: { password: string } | undefined
): boolean {
  let password = "";

  if (formValues) {
    password = formValues.password;
  }

  if (value === password) {
    return false;
  }

  return true;
}

function regExpValidator(regExp: RegExp) {
  return (value: string): boolean => {
    if (value === "") {
      return false;
    }

    let res = value.match(regExp);
    return res === null;
  };
}

// Форма входа
export const signInValidator: TValidators = {
  email: {
    required,
    validateEmail: regExpValidator(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
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
    validateUrl: regExpValidator(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    ),
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
    validateEmail: regExpValidator(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
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
    validateUrl: regExpValidator(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    ),
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
};

// Форма добавления фотографии
export const addCardValidator: TValidators = {
  name: {
    required,
    minLength,
    maxLength,
  },

  url: {
    required,
    validateUrl: regExpValidator(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    ),
  },
};
