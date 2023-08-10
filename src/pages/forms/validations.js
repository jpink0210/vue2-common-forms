import { required, maxLength } from "vuelidate/lib/validators";

export const validations = {
  chiName: {
    required,
    maxLength: maxLength(20)
  },
  engName: {
    required,
    maxLength: maxLength(40)
  },
  cellphone: {
    required,
    maxLength: maxLength(10)
  },
  phone: {
    first: { required },
    last: { required },
  },
};
