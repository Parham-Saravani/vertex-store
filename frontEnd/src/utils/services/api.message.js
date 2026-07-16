import { baseUrl } from "../http";
const postMessage = (obj) => {
  const { fullName, email, title, message } = obj;
  const response = fetch(`${baseUrl}/api/messages`)
};
export default postMessage;