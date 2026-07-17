const saveDataInLocalStorage = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};
const getDataFromLocalStorage = (name) => {
  const data = JSON.parse(localStorage.getItem(name));
  if (data) {
    return data;
  } else {
    return null;
  }
};
export { saveDataInLocalStorage, getDataFromLocalStorage };