export default getNearestCity = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    console.log({ data });
    if (data && data.address && data.address.county) {
      return data.address.county;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching city data:", error);
    return "Unknown City";
  }
};
