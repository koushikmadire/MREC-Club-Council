import axios from "axios";

const clubMembers = async (name) => {
  const clubName = name;
  let clubMembersList = [];
  try {
    const response = await axios.get(
      `https://mrec-club-council.onrender.com/club-members?clubName=${clubName}`
    );
    clubMembersList = await response.data;
    return clubMembersList;
  } catch (e) {
    return clubMembersList;
  }
};

export default clubMembers;
