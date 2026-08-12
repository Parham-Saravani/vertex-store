// const baseUrl = "https://vertex-store.onrender.com";
const baseUrl = "http://localhost:40875";
const apiRequestHandler = async (address, param) => {
  return await apiRequest(address , param)
};
const apiRequest = async (address , param = null) => {
  try {
      const response = await fetch(`${baseUrl}${address}${param ? param : ''}`);
      const data = await response.json();
      return data;
    } catch (error) {      
      return null;
    }
}
export { apiRequestHandler, baseUrl };
