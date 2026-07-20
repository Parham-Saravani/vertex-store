const saveDataInLocalStorage = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};
const getDataFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));

};
export { saveDataInLocalStorage, getDataFromLocalStorage };