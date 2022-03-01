import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" className="img" />
      </div>
      <div className="right">
        <h3>Contact.</h3>
        <form className="form">
          <input type="email" placeholder="Email" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
