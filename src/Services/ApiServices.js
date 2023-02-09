import axios from 'axios';

const _api = axios.create({
  // baseURL: 'http://34.205.159.219/api',
  baseURL:'http://34.205.159.219:9500',
  headers:{
      "content-type":"application/json",
  }
});

const apiService = {
  postCompound: async data => {
    try {
      const result = await _api.post('/compound', data);
      if (result.status === 200 || result.status === 201) {
        return result?.data;
      }

      return false;
    } catch (error) {
      // console.log('====================================');
      // console.log(error?.message);
      // console.log('====================================');
      return false;
    }
  },

  postFile: async data => {
    try {
      const result = await _api.post('/multi', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (result.status === 200 || result.status === 201) {
        return result?.data;
      }
      return false;
    } catch (error) {
      console.log('====================================');
      console.log(error?.message);
      console.log('====================================');
      return false;
    }
  },
};

export { apiService };
