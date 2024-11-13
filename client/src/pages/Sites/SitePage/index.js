import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BigCaseVideoBox } from "../../../components/Boxes";
import ContactSection from "../../Home/ContactSection";
import EquipmentUsed from "./EquipmentUsed";
import TopSiteEventSection from "./TopSiteEventSection";
import UserBtnList from "./UserBtnList";
import { getSiteById } from "../../../api/siteAPI";
import endpoint from "../../../config/config";
import useScrollToTop from "../../../hooks/useScrollToTop";
import "../../../styles/pages/sitepage.css";

const SitePage = () => {
  useScrollToTop();
  const { siteId } = useParams();
  const [siteOne, setSiteOne] = useState({});
  useEffect(() => {
    getSiteById(siteId).then((data) => {
      data && setSiteOne(data);
    });
  }, [siteId]);
  return (
    <section className="wrapper">
      <div className="container">
        <TopSiteEventSection siteOne={siteOne} />
        <BigCaseVideoBox src={`${endpoint}/uploads/site/${siteOne?.video}`} />
        <UserBtnList />
        <EquipmentUsed
          title="На этой площадке проводились"
          cases={siteOne?.cases}
        />
        <ContactSection title="Рассчитать cобытие на этой площадке" />
      </div>
    </section>
  );
};

export default SitePage;
