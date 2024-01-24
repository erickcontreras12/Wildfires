const TOKENS = {
  MONTH: "{{month}}",
  YEAR: "{{year}}",
};

const API_BASE_URL = "http://localhost:4001/";
// Use the base URL as a helper to build each of the enpoints individually to avoid multiple changes and isolation for each endpoint
const API_WILDFIRES_ENDPOINT = `${API_BASE_URL}disasters?month=${TOKENS.MONTH}&year=${TOKENS.YEAR}`;

export const fetchWildfireData = async (month, year) => {
  const response = await fetch(
    API_WILDFIRES_ENDPOINT.replace(TOKENS.MONTH, month).replace(
      TOKENS.YEAR,
      year
    )
  );
  const wildfires = await response.json();
  return wildfires;
};

export default {};
