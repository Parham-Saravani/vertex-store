const baseUrl = "http://localhost:40875";
const apiRequest = async (address) => {
  const response = await fetch(`${baseUrl}${address}`);
  const data = await response.json();
  return data;
};

export default apiRequest;
