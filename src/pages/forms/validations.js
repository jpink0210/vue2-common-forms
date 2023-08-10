import {
  required,
  requiredIf,
  maxLength,
  minValue,
  maxValue,
  numeric
} from "vuelidate/lib/validators";

import isEmpty from "lodash/isEmpty";


export const yymmDurationValid = value => {

  if (
    !isEmpty(value) &&
    !isEmpty(value.startYear) &&
    !isEmpty(value.startMonth) &&
    !isEmpty(value.endYear) &&
    !isEmpty(value.endMonth)
  ) {
    var  end = new Date(value.endYear, value.endMonth[0].value);
    var  start = new Date(value.startYear, value.startMonth[0].value);
    var compare = ( end >= start )
    return compare;
  } else {
    return true;
  }
};

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
  drivingLicense: {required},
  transport: {required},
  duration: {
    startYear: {
      required,
      numeric,
      minValue: minValue(1940),
      maxValue: maxValue(2023),
      maxLength: maxLength(4),
    },
    startMonth: {
      required,
      numeric,
    },
    endYear: {
      numeric,
      requiredIf: requiredIf(function() {
        return !this.stillWork;
      }),
      minValue: minValue(1940),
      maxValue: maxValue(2023),
      maxLength: maxLength(4),
    },
    endMonth: {
      numeric,
      requiredIf: requiredIf(function() {
        return !this.stillWork;
      })
    },
    yymmDurationValid
  },

};

