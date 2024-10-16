import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5001/mealstogo-fc13b/us-central1/geocode?city=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch location:", error);
    throw error;
  }
};

export const locationTransform = (result) => {
  console.log(result, "zzz");
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
