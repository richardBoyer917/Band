import { useNavigate } from "react-router-dom";
import { gear123, gear94 } from "../../assets";
import {
  BoxRound,
  MiddleGearRound,
  MiddleRound,
  SmallGearRound,
  SmallRound,
} from "../../components/BoxRound";
import {
  BlackButton,
  DefaultButton,
  SmallTabButton,
  SmallTransButton,
} from "../../components/Buttons";
import { TwoGears } from "../../components/Gears";
import { menuItemsData } from "../../constant/group";
import { Link } from "react-scroll";

const HeroSection = () => {
  const navigate = useNavigate();
  const buttonGroupClassInfo = ["firstGroup", "secondGroup", "thirdGroup"];

  const handleLink = (url) => {
    navigate(url);
  };

  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="sectionWrapper" style={{ position: "relative" }}>
      <div className="heroSection ">
        <div className="section1 heroContent">
          <div className="gearShow">
            {menuItemsData[1].submenu.map((item, index) => (
              <div
                key={index}
                className={`alignCenter ${buttonGroupClassInfo[index]}`}
                style={{ gap: "5px" }}
              >
                <SmallTransButton title={item.title} />
                {item.submenu.map((menu, idx) => (
                  <SmallTabButton
                    onClick={() => handleLink(menu.url)}
                    key={idx}
                    title={menu.title}
                  />
                ))}
              </div>
            ))}
          </div>
          <p className="pageTitle" style={{ textAlign: "left" }}>
            Технический продакшн
          </p>
          <p className="pageTitle" style={{ textAlign: "right" }}>
            частных мероприятий
          </p>
          <div className="itemCenter">
            <div
              className="gearHidden"
              style={{ gap: "4px", marginTop: "32px" }}
            >
              {menuItemsData[1].submenu.map((item, index) => (
                <SmallTransButton
                  key={index}
                  title={index === 0 ? "ТЕХ. УСЛУГИ" : item.title}
                />
              ))}
            </div>
          </div>
          <div className="flexWrap itemCenter heroBottomButton">
            <Link to="gallerySection" spy={true} smooth={true}>
              <DefaultButton title="КЕЙСЫ" />
            </Link>
            <BlackButton
              title="зАПОЛНИТЬ БРИФ"
              onClick={() =>
                handleNavigation("https://forms.yandex.com/admin/")
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div className="gearHidden">
          <SmallGearRound right={-1} bottom={-1} rotate={"90deg"} />
          <SmallGearRound left={-1} bottom={-1} rotate={"180deg"} />
          <SmallRound right={-1} top={-1} />
          <SmallRound left={-1} top={-1} rotate={"-90deg"} />
        </div>

        <div className="gearShow">
          <MiddleRound right={-1} top={-1} />
          <MiddleRound left={-1} top={-1} rotate="-90deg" />
          <MiddleGearRound
            flag={true}
            right={-1}
            bottom={-5}
            rotate="90deg"
          />
          <div className="gearIndex heroTwoGears">
            <TwoGears img1={gear94} img2={gear123} />
            <BoxRound left="0px" top="-49px" width="50px" />
            <BoxRound right="-47px" bottom="43px" width="50px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
