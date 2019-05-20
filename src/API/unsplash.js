import axios from "axios";

/* This creates an instance of axios client with some default properties. */
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8a2b9e616eb97bd86c2bb9c83e3d118db587a2adccedb4b0713c4ff2b3b78e10"
  }
});

/* Instead of this we could have created a function which would have all information about a specific method like
 searhing image but creating an axios instance like done here has benefits. */
