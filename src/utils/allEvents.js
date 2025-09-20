import axios from "axios";
const allEvents = async () => {
  let upComingEventsList = [];
  try {
    const response = await axios.get("https://mrec-club-council.onrender.com/all-events");
    upComingEventsList = response.data;
  } catch (e) {
    return upComingEventsList;
  }
  // console.log(recentEventsList);
  return upComingEventsList;
};

export default allEvents;
