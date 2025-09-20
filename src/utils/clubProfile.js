import axios from "axios";

const clubProfile = async ({ clubId, clubName }) => {
  let clubsList = [];
  try {
    let url;
    if (clubId) {
      url = `https://mrec-club-council.onrender.com/clubProfile?clubId=${clubId}`;
    } else if (clubName) {
      url = `https://mrec-club-council.onrender.com/clubProfile?clubName=${clubName}`;
    } else {
      throw new Error("Missing parameterss: clubId or clubName");
    }

    const response = await axios.get(url);
    clubsList = await response.data;
    return clubsList;
  } catch (e) {
    console.error("Error fetching club profile:", e);
    return clubsList;
  }
};

export default clubProfile;
