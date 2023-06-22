import axios from "axios";

export const fetchAllEmployees = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/adminControl/allemployees"
    );
    console.log(response.data.length);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error("Response Error:", error.response.data);
      console.error("Status Code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request Error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }
    throw error; // Rethrow the error to handle it further up the call stack if needed
  }
};
