import axios from "axios";
const images = async () => {
  let imagesList = [];
  // console.log("In Utils Images");
  try {
    const response = await axios.get("https://mrec-club-council.onrender.com/get-images");
    imagesList = response.data;
  } catch (e) {
    console.log(e);
  }
  return imagesList;
};

export default images;
