import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Visualization from "../pages/Services/Visualization";
import Rehearsal from "../pages/Services/rehearsal";
import Header from "../layouts/Header";
// import AdminHeader from "../layouts/AdminHeader"
import NewHeader from "../layouts/NewHeader";
import Footer from "../layouts/Footer";

import Policy from "../pages/Policy";
import NotFound from "../pages/NotFound";
import ShowDevelopment from "../pages/Services/ShowDevelopment";
import Event from "../pages/Production/Event";
import TourConcert from "../pages/Production/TourConcert";
import Light from "../pages/Technical/Light";
import Sound from "../pages/Technical/Sound";
import VideoPage from "../pages/Technical/Video";
import StageClothes from "../pages/Technical/StageClothes";
import TeamPage from "../pages/Team";
import TeamOffice from "../pages/TeamOffice";
import CaseCatalog from "../pages/Cases/CaseCatalog";
import CaseEvent from "../pages/Cases/CaseEvent";
import CatalogOfSites from "../pages/Sites/CatalogOfSites";
import SitePage from "../pages/Sites/SitePage";
import { CatalogInfo } from "../constant/group";
import EquipmentCatalog from "../pages/Equipments/EquipmentCatalog";
import EquipmentPage from "../pages/Equipments/EquipmentPage/EquipmentPage";

import AdminPage from "../adminpage/AdminPage";
import AdminLogin from "../adminpage/AdminLogin";
import NewSite from "../adminpage/components/site/NewSite";
import NewEquip from "../adminpage/components/equipment/NewEquip";
import NewFactory from "../adminpage/components/factory/NewFactory";
import NewReview from "../adminpage/components/review/NewReview";
import NewCase from "../adminpage/components/case/NewCase";
import NewThree from "../adminpage/components/D_Three/NewThree";
import NewTeam from "../adminpage/components/team/NewTeam";
import NewParticipant from "../adminpage/components/Rehearsal/NewParticipant";
import AdminSetting from "../adminpage/AdminSetting";
import CreateUser from "../adminpage/components/AdminUsers/CreateUser";

const RouterControl = () => {
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsAdminPage(currentPath.includes("/admin"));
  }, []);

  return (
    <BrowserRouter>
      {!isAdminPage ? (
        <Header />
      ) : (
        <NewHeader setIsAdminPage={setIsAdminPage} />
      )}
      <Routes>
        {/* AdminPage */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin/pannel" element={<>sdf</>} />
        <Route path="/admin/setting" element={<AdminSetting />} />
        <Route path="/admin/create" element={<CreateUser />} />
        <Route path="/admin/edit" element={<CreateUser />} />

        <Route path="/admin/site" element={<NewSite />} />
        <Route path="/admin/case" element={<NewCase />} />
        <Route path="/admin/equipment" element={<NewEquip />} />
        <Route path="/admin/factory" element={<NewFactory />} />
        <Route path="/admin/review" element={<NewReview />} />
        <Route path="/admin/three" element={<NewThree />} />
        <Route path="/admin/participant" element={<NewParticipant />} />
        <Route path="/admin/team" element={<NewTeam />} />

        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="/services/visualization" element={<Visualization />} />
        <Route path="/services/rehearsal" element={<Rehearsal />} />
        <Route path="/services/showdevelopment" element={<ShowDevelopment />} />

        {/* Production Page */}
        <Route path="/production/event" element={<Event />} />
        <Route path="/production/tourconcert" element={<TourConcert />} />

        {/* Technical Page */}
        <Route path="/technical/light" element={<Light />} />
        <Route path="/technical/sound" element={<Sound />} />
        <Route path="/technical/videopage" element={<VideoPage />} />
        <Route path="/technical/stageclothes" element={<StageClothes />} />

        <Route
          path="/cases"
          element={
            <CaseCatalog type="case" catalogInfo={CatalogInfo.caseCatalog} />
          }
        />
        <Route path="/case-one/:caseId" element={<CaseEvent />} />

        {/* Sites */}
        <Route
          path="/sites"
          element={
            <CatalogOfSites
              type="platform"
              progress="Вместимость"
              catalogInfo={CatalogInfo.platformCatalog}
            />
          }
        />
        <Route path="/site-one/:siteId" element={<SitePage />} />

        {/* Equipment Page */}
        <Route
          path="/equipments"
          element={
            <EquipmentCatalog
              type="equipment"
              catalogInfo={CatalogInfo.equipmentCatalog}
            />
          }
        />
        <Route path="/equipment-one/:equipId" element={<EquipmentPage />} />

        {/* TeamPage */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<TeamOffice />} />

        <Route path="/policy" element={<Policy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterControl;
