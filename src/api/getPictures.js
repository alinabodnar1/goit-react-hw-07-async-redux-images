import axios from "axios";

export const getPictures = async () => {
 
     const params = new URLSearchParams({
        key: "34882126-23c8752d62a2e062d45efec22",
        q: 'cat',
        image_type: "photo",
        orientation: "horizontal",
        per_page: 20,
     });
     
   const { data } = await axios.get(`https://pixabay.com/api/?${params.toString()}`);
   // console.log("data:", { data });
   return data;
};

