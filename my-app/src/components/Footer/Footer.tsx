import "../../components/Footer/Footer.css";
import logo from "../../../src/assets/images/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo} alt="Hero" />
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
      <p>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
    </div>
  );
}