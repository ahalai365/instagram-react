export const profileValidators = {
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
  description: {
    required: (value: string): boolean => {
      return value === "";
    },
    maxLength: (value: string): boolean => {
      return value.length > 20;
    },
  },
};