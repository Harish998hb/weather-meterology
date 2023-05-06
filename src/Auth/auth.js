import axios from "axios";

export const apiCall = axios.create({
  baseURL: " http://api.weatherapi.com/v1",
});

export const apiGetCall = (URL='', qParam) => {
  apiCall.get(URL, {
    params: { key: apiKey, q: qParam },
  }).then((res)=>{
    return res.data;
  }).catch((err)=>{
    console.error(err);
  });
};

const imgLink=['https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
'https://images.unsplash.com/photo-1556076571-ebe593d875be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
'',]

export const apiKey = "2217c346df844afeae3182253231604";

export default apiCall;
