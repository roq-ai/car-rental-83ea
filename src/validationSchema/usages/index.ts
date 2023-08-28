import * as yup from 'yup';

export const usageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  mileage_start: yup.number().integer().required(),
  mileage_end: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
