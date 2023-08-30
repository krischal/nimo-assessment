import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const BASE_URL = 'https://api.coingecko.com/api/v3/';


export const api = async (
  method,
  url,
  body,
) => {

  return await axios[method](
    BASE_URL + url,
    body,
    {"Content-Type": "application/json",
        } ,
  )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};


