import VisaLogo from "../../assets/visa.png";
import MasterCardLogo from "../../assets/Mastercard-logo-white.png";
import AmericanExpressLogo from "../../assets/American-Express-Logo.png";
import SkrillLogo from "../../assets/skrill-logo.png";
import EtherumLogo from "../../assets/ethereum-eth-logo.png";
import BitCoinLogo from "../../assets/bitcoin-logo.png";
import BitCoinLogoVerde from "../../assets/bitcoin-logo-verde.png";
import LiteCoinLogo from "../../assets/litecoin-logo.png";
import InstagramLogo from "../../assets/instagram.png";
import FacebookLogo from "../../assets/facebook.png";
import DiscordLogo from "../../assets/discord-logo.png";
import TwitterLogo from "../../assets/twitter.png";
import Logo from "../../assets/chicks-logo-large.svg";
import Star from "../../assets/star.png";

export const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="content-footer-one">
        <div className="subcontent-footer-one_one">
          <img src={VisaLogo} alt="Visa" className="footer-logo visa-logo" />
        </div>
        <div className="subcontent-footer-one_two">
          <img
            src={MasterCardLogo}
            alt="Mastercard"
            className="footer-logo mastercard-logo"
          />
        </div>
        <div className="subcontent-footer-one_three">
          <img
            src={AmericanExpressLogo}
            alt="American Express"
            className="footer-logo visa-logo"
          />
        </div>
        <div className="subcontent-footer-one_four">
          <img
            src={SkrillLogo}
            alt="Skrill"
            className="footer-logo skrill-logo"
          />
        </div>
        <div className="subcontent-footer-one_five">
          <img
            src={BitCoinLogoVerde}
            alt="BitCoin"
            className="footer-logo bitcoin-logo"
          />
          <img
            src={EtherumLogo}
            alt="Etherum"
            className="footer-logo etherum-logo"
          />
          <img
            src={BitCoinLogo}
            alt="BitCoin"
            className="footer-logo bitcoin-logo2"
          />
          <img
            src={LiteCoinLogo}
            alt="LiteCoin"
            className="footer-logo litecoin-logo"
          />
          <p>and 50+ more</p>
        </div>
      </div>
      <div className="content-footer-two">
        <div className="subcontent-footer-two_one">
          <img
            src={FacebookLogo}
            alt="Facebook"
            className="footer2-logo facebook-logo"
          />
          <img
            src={InstagramLogo}
            alt="Instagram"
            className="footer2-logo instagram-logo"
          />
          <img
            src={TwitterLogo}
            alt="Twitter"
            className="footer2-logo twitter-logo"
          />
          <img
            src={DiscordLogo}
            alt="Discord"
            className="footer2-logo discord-logo"
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="subcontent-footer-two_two">
          <div className="col">
            <div className="navbar_logo logo_footer">
              <img src={Logo} alt="Logo" className="logo" />
              <p className="mt-2">support@chicksgold.com</p>
            </div>
          </div>
          <div className="col">
            <h3>Chicks Gold</h3>
            <p>Games</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Sitemap</p>
          </div>
          <div className="col">
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Copyright Policy</p>
          </div>
          <div className="col">
            <div className="container-stars">
              <div className="star">
                <img src={Star} alt="Star icon" />
              </div>
              <div className="star">
                <img src={Star} alt="Star icon" />
              </div>
              <div className="star">
                <img src={Star} alt="Star icon" />
              </div>
              <div className="star">
                <img src={Star} alt="Star icon" />
              </div>
              <div className="star">
                <img src={Star} alt="Star icon" />
              </div>
            </div>
            <p>Truspilot Reviews</p>
          </div>
        </div>
      </div>
      <div className="content-footer-three">
        <p>&copy; 2021 Chicks Gold. All rights reserved.</p>
      </div>
    </footer>
  );
};
