const createCookie = (data) => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  document.cookie = `auth-token = ${data};path:/;expires=${date}`;
};
const isUserLogedIn = () => {
  const status = document.cookie;
  if(status){
    return status.includes('auth-token');
  }else{
    return false
  } 
}
export {createCookie , isUserLogedIn};