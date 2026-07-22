class Message {
  constructor(token, fullName, email, title, message) {
    this.author = token;
    this.fullName = fullName;
    this.email = email;
    this.title = title;
    this.message = message;
  }
}
export default Message;