import "../../components/HeroImage/HeroImage.css";
import heroPhoto from "../../../src/assets/images/hero-photo.png";
import logo from "../../../src/assets/images/logo.svg";
import halfTone from "../../../src/assets/images/halftone.png";

export default function HeroImage() {
  return (
    <div className="hero-image">
      <h1 className="title">COMIC CLOSET</h1>
      <img className="logo-hero" src={logo} alt="Hero" />
      <img className="hero-photo" src={heroPhoto} alt="Hero" />
      <img className="halftone" src={halfTone} alt="Hero" />
    </div>
  );
}