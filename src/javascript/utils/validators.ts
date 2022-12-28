export const validators = {
  // Имя пользователя
  name: {
    required: (value: string): boolean => {
      return value === "";
    },
    minLength: (value: string): boolean => {
      return value.length > 0 && value.length <= 3;
    },
    maxLength: (value: string): boolean => {
      return value.length > 20;
    },
  },

  // Профессия пользователя
  description: {
    required: (value: string): boolean => {
      return value === "";
    },
    maxLength: (value: string): boolean => {
      return value.length > 20;
    },
  },

  // Название фотографии
  title: {
    required: (value: string): boolean => {
      return value === "";
    },
    maxLength: (value: string): boolean => {
      return value.length > 20;
    },
  },

  // URL фотографии
  url: {
    required: (value: string): boolean => {
      return value === "";
    },
    validateRegExp: (value: string): boolean => {
      if (value === ''){
        return false
      }

      let res = value.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      );
      return res === null;
    },
  },


  // email
  email: {
    required: (value: string): boolean => {
      return value === "";
    },
    validateEmail: (value: string): boolean => {
      if (value === ''){
        return false
      }

      let res = value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return res === null;
    },
  },

  // Пароль
  password: {
    required: (value: string): boolean => {
      return value === "";
    },
  },

  // Повтор пароля
  passwordRepit: {
    required: (value: string): boolean => {
      return value === "";
    },
  },

  // Аватар
  avatar: {
    required: (value: string): boolean => {
      return value === "";
    },
    validateRegExp: (value: string): boolean => {
      if (value === ''){
        return false
      }

      let res = value.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      );
      return res === null;
    },
  },
};
