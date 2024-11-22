import { Link as ScrollLink } from "react-scroll";
import { darkArrowup, darkTelegramRound, lightArrow } from "../../assets";
import "../../styles/components/button.css";

const ScrollSpyButton = ({ to, content }) => (
  <ScrollLink to={to} offset={-200} smooth={true} spy={true}>
    {content}
  </ScrollLink>
);

const DefaultButton = ({ type, onClick, title }) => (
  <button type={type} onClick={onClick} className="button defaultButton">
    {title}
  </button>
);

const BlackButton = ({ title, onClick }) => (
  <button className="button defaultButton blackButton" onClick={onClick}>
    {title}
  </button>
);

const TabButton1 = ({ icon, title, onClick }) => (
  <button
    className="button tabButton"
    onClick={onClick}
    style={{ background: `var(--secondaryWhiteColor)` }}
  >
    <img src={icon} alt="darkAdd" />
    {title}
  </button>
);

const TabButton = ({ icon, title, onChange }) => (
  <label className="fileUploadButton">
    <input type="file" name="video" hidden onChange={onChange} />
    <img src={icon} alt="darkAdd" />
    {title}
  </label>
);

const SmallTabButton = ({ title, onClick }) => (
  <button onClick={onClick} className="button tabButton smallTabButton">
    {title}
  </button>
);

const CircleButton = ({ icon, scale }) => (
  <button className="button circleButton" style={{ scale: scale }}>
    <img src={icon} alt="darkTelegram" />
  </button>
);

const OutLinedButton = ({ onClick, title }) => (
  <button onClick={onClick} className="button defaultButton outLinedButton">
    {title}
  </button>
);

const BigTransButton = ({ title, long, onClick }) => (
  <button
    className={`button transButton bigTransButton ${
      long ? "bigTransButtonPadding" : ""
    }`}
    onClick={onClick}
  >
    {title}
  </button>
);

const SmallTransButton = ({ title }) => (
  <button className="button transButton smallTransButton">{title}</button>
);

const HeroTopWhiteButton = ({ title }) => (
  <button className="button heroTopWhitebutton">{title}</button>
);

const RectButton = ({ onClick, title }) => (
  <button onClick={onClick} className="button rectButton">
    {title}
  </button>
);

const ArrowDefaultButton = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="button defaultButton "
    style={{ height: "39px", paddingRight: "24px", paddingLeft: "24px" }}
  >
    {title}
    <img src={darkArrowup} alt="arrowButton" />
  </button>
);

const ArrowBlackButton = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="button defaultButton blackButton"
    style={{ height: "39px", paddingRight: "24px", paddingLeft: "24px" }}
  >
    {title}
    <img src={lightArrow} alt="arrowButton" />
  </button>
);

const BigArrowBlackButton = ({ title }) => (
  <button
    className="button defaultButton blackButton"
    style={{ height: "48px" }}
  >
    {title}
    <img src={darkTelegramRound} alt="arrowButton" />
  </button>
);

const HeroTopButton = ({ title }) => (
  <button className="button heroTopbutton">{title}</button>
);

const SmallHeroLinkButton = ({ title }) => (
  <button className="button smallHeroButton heroTopbutton">{title}</button>
);

const LinkButton = ({ title }) => <span className="linkButton">{title}</span>;

const DownloadButton = ({ icon, title, onClick }) => (
  <button className="button blackButton downloadBtn" onClick={onClick}>
    <img src={icon} alt="icon" /> {title}
  </button>
);

const DownloadButton1 = ({ icon, title, onClick }) => (
  <button
    className="button blackButton downloadBtn x16Font_5"
    style={{
      height: "34px",
      background: "#EBEBEB",
      color: `var(--primaryBgColor)`,
      padding: "11.5px clamp(10px, 2vw, 24px)",
    }}
    onClick={onClick}
  >
    <img src={icon} alt="icon" /> {title}
  </button>
);

const HeroDarkButton = ({ title }) => (
  <button className="button defaultButton blackButton heroDarkButton">
    {title}
  </button>
);

const DarkIconButton = ({ icon, title, onClick }) => (
  <button
    className="button blackButton downloadBtn"
    onClick={onClick}
    style={{ fontSize: "12px", padding: "8px 10px" }}
  >
    <img src={icon} alt="icon" />
    {title}
  </button>
);

const QuestionButton = ({ title }) => (
  <button className="button questionButton">{title}</button>
);

const EventTagButton = ({ title }) => (
  <button className="button transButton eventTags">{title}</button>
);

const BlackButtonBorderWhite = ({ onClick, title }) => (
  <button
    onClick={onClick}
    className="button defaultButton blackButton"
    style={{ border: "1px solid white" }}
  >
    {title}
  </button>
);

const CaseButton = ({ title }) => (
  <button className="button caseButton">{title}</button>
);

const Banquet = ({ title }) => (
  <button className="button banquetBtn">{title}</button>
);

const CaptchaButton = ({ title, onClick }) => (
  <button
    className="button captchaButton itemCenter x24Font_2"
    onClick={onClick}
  >
    {title}
  </button>
);

const BestCaseTagButton = ({ title, className, onClick }) => (
  <button className={`button bestCaseTagButton ${className}`} onClick={onClick}>
    {title}
  </button>
);

export {
  ScrollSpyButton,
  DefaultButton,
  BlackButton,
  TabButton1,
  TabButton,
  SmallTabButton,
  CircleButton,
  OutLinedButton,
  SmallTransButton,
  BigTransButton,
  RectButton,
  ArrowDefaultButton,
  ArrowBlackButton,
  BigArrowBlackButton,
  HeroTopButton,
  SmallHeroLinkButton,
  LinkButton,
  DownloadButton,
  DownloadButton1,
  HeroDarkButton,
  DarkIconButton,
  QuestionButton,
  EventTagButton,
  HeroTopWhiteButton,
  BlackButtonBorderWhite,
  CaseButton,
  Banquet,
  CaptchaButton,
  BestCaseTagButton,
};
