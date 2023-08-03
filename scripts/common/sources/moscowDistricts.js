import axios from 'axios';

export const getMoscowDistricts = () => {
  return axios.post(
    `https://apidata-new.mos.ru/v1/datasets/60863/rows?api_key=${process.env.REACT_APP_DATA_MOS_API_KEY}&$filter=Cells/startswith(Name,Флаг муниципального округа) eq true`
  );
};
