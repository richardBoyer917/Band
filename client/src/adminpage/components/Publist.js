import { useState, useEffect } from "react";
import { deleteCase, getCases, getCasesWithCheckbox } from "../../api/caseAPI";
import { Button } from "@mui/material";
import { deleteSite, getSite } from "../../api/siteAPI";
import { deleteEquip, getEquips } from "../../api/equipAPI";
import { deleteFactory, getFactorys } from "../../api/facAPI";
import { deleteThree, getThrees } from "../../api/threeAPI";
import { deleteReview, getReviews } from "../../api/reviewAPI";
import { useNavigate } from "react-router-dom";
import { AdminSection, AdminSection1 } from "./AdminSection";
import { deleteParticipant, getParticipant } from "../../api/participantAPI";
import { getTeam } from "../../api/teamAPI";
import FormDialog from "../../components/Modal";
import { AdminDataBox } from "../../components/Boxes";
import {
  DataTableActionCard,
  DataTableMoveRowCard,
} from "../../components/Cards";
import { getUserInfo } from "../../api/adminAPI";

const Publist = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [caseType, setCaseType] = useState("Home");
  const [userInfo, setUserInfo] = useState(null);

  const handleOpenDialog = (id) => {
    setSelectedId(id); // Set the selected row ID
    setOpenDialog(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
    setSelectedId(null); // Reset the selected ID
  };

  const handleNewCreate = (url) => {
    if (url === "/admin/case" && bestCases?.length >= 9) {
      alert("Невозможно добавить более 9 кейсов в данный блок.");
    } else {
      navigate(url);
    }
  };

  const handleDelete = (index) => {
    deleteCase(index).then((data) => {
      setCases(data);
    });
  };

  const handleEquipDelete = (index) => {
    deleteEquip(index).then((data) => {
      setEquipment(data);
    });
  };

  const handleSiteDelete = (index) => {
    deleteSite(index).then((data) => {
      setSites(data);
    });
  };

  const handleRevDelete = (index) => {
    deleteReview(index).then((data) => {
      setRevlist(data);
    });
  };

  const handleFactoryDelete = (index) => {
    deleteFactory(index).then((data) => {
      setFactory(data);
    });
  };

  const handleThreeDelete = (index) => {
    deleteThree(index).then((data) => {
      setThree(data);
    });
  };

  const handleParticipantDelete = (index) => {
    deleteParticipant(index).then((data) => {
      setParticipant(data);
    });
  };

  const handleSelBestCase = (type) => {
    setCaseType(type);
  };

  const moveRow = (id, direction) => {
    const index = bestCases.findIndex((row) => row.id === id);
    if (index === -1) return;

    const newRows = [...bestCases];
    const [movedRow] = newRows.splice(index, 1);

    if (direction === "up" && index > 0) {
      newRows.splice(index - 1, 0, movedRow);
    } else if (direction === "down" && index < bestCases.length - 1) {
      newRows.splice(index + 1, 0, movedRow);
    }

    setBestCases(newRows);
  };

  const handleArrowUp = (id) => moveRow(id, "up");
  const handleArrowDown = (id) => moveRow(id, "down");

  const createMediaColumn = (field, headerName) => ({
    field,
    headerName,
    flex: 1,
    renderCell: (params) => {
      const src = field === "images" ? `${params.value[0]}` : `${params.value}`;

      const style =
        field === "video"
          ? { width: 70, height: 50, marginRight: 8, objectFit: "cover" }
          : { width: 50, height: 50, objectFit: "cover" };

      return field === "video" ? (
        <video src={src} alt="media" style={style} controls />
      ) : (
        <img src={src} alt="media" style={style} />
      );
    },
  });
  const createActionColumn = (type, handleDelete, link, scrollSpy) => ({
    field: "action",
    headerName: "Действие",
    flex: 2,
    renderCell: (params) => (
      <DataTableActionCard
        userInfo={userInfo}
        params={params}
        type={type}
        handleDelete={handleDelete}
        link={link}
        scrollSpy={scrollSpy}
      />
    ),
  });

  const [cases, setCases] = useState([]);
  const caseColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Имя", flex: 3.5 },
    // { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "type", headerName: "Тип", flex: 1.5 },
    { field: "venue", headerName: "Адрес", flex: 1 },
    { field: "guests", headerName: "Гости", flex: 0.5 },
    createMediaColumn("video", "Дело"),
    createActionColumn("case", handleDelete),
    {
      field: "addAction",
      headerName: "Добавить решение",
      flex: 1.5,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenDialog(params.row.id)}
        >
          Добавить
        </Button>
      ),
    },
  ];

  const [bestCases, setBestCases] = useState([]);
  const bestCaseColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Кейс", flex: 3.5 },
    { field: "type", headerName: "Тип", flex: 1.5 },
    createMediaColumn("video", "Дело"),
    createActionColumn("case", handleDelete),
    {
      field: "moveRow",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <DataTableMoveRowCard
          params={params}
          handleMoveUp={handleArrowUp}
          handleMoveDown={handleArrowDown}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  const [sites, setSites] = useState([]);
  const siteColums = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Имя", flex: 1 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "type", headerName: "Тип", flex: 1 },
    { field: "capacity", headerName: "Вместимость", flex: 1 },
    { field: "address", headerName: "Адрес", flex: 1 },
    { field: "link_page", headerName: "Ссылка Страница", flex: 1 },
    createMediaColumn("video", "Сайт"),
    createActionColumn("site", handleSiteDelete),
  ];

  const [equipment, setEquipment] = useState([]);
  const equipmentColums = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Имя", flex: 1 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "type", headerName: "Тип", flex: 1 },
    { field: "description", headerName: "Описание", flex: 2 },
    { field: "manufacturer", headerName: "Производитель", flex: 1 },
    createMediaColumn("images", "Оборудование"),
    createActionColumn("equipment", handleEquipDelete),
  ];

  const [revlist, setRevlist] = useState([]);
  const reviewColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "type", headerName: "Тип", flex: 1 },
    { field: "name", headerName: "Имя", flex: 1 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "displayType", headerName: "Тип", flex: 1 },
    { field: "content", headerName: "Содержание", flex: 2 },
    createActionColumn(
      "review",
      handleRevDelete,
      "/services/visualization",
      "customerReviewSection"
    ),
  ];

  const [factory, setFactory] = useState([]);
  const factoryColums = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Название", flex: 2 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "description", headerName: "Описание", flex: 3 },
    createMediaColumn("video", "Завод Показать"),
    createActionColumn("factory", handleFactoryDelete, "/", "blogSection"),
  ];

  const [participant, setParticipant] = useState([]);
  const participantColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Имя", flex: 4 },
    createMediaColumn("image", "Avatar"),
    createActionColumn(
      "participant",
      handleParticipantDelete,
      "/services/showdevelopment",
      "userLists"
    ),
  ];

  const [three, setThree] = useState([]);
  const threeColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title1", headerName: "Название1", flex: 2 },
    { field: "title2", headerName: "Название2", flex: 2 },
    createMediaColumn("video", "3D-визуализация"),
    createActionColumn("three", handleThreeDelete),
  ];

  const [team, setTeam] = useState([]);
  const teamColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "tag1", headerName: "Тег1", flex: 1 },
    { field: "tag2", headerName: "Тег2", flex: 1 },
    { field: "tag3", headerName: "Тег3", flex: 1 },
    { field: "tag4", headerName: "Тег4", flex: 1 },
    { field: "tag5", headerName: "Тег5", flex: 1 },
    { field: "tag6", headerName: "Тег6", flex: 1 },
    { field: "tag7", headerName: "Тег7", flex: 1 },
    { field: "tag8", headerName: "Тег8", flex: 1 },
    createActionColumn("team", () => {
      console.log("handleTeamDelete");
    }),
  ];

  useEffect(() => {
    getCases().then((data) => {
      setCases(data);
    });
    getSite().then((data) => {
      setSites(data);
    });
    getEquips().then((data) => {
      setEquipment(data);
    });
    getThrees().then((data) => {
      setThree(data);
    });
    getFactorys().then((data) => {
      setFactory(data);
    });
    getReviews().then((data) => {
      setRevlist(data);
    });
    getParticipant().then((data) => {
      setParticipant(data);
    });
    getTeam().then((data) => {
      setTeam(data);
    });
    getUserInfo().then((data) => {
      setUserInfo(data);
    });
  }, []);

  useEffect(() => {
    getCasesWithCheckbox(caseType, 9)
      .then((data) => {
        setBestCases(data);
      })
      .catch((error) => {
        console.error("Error fetching cases:", error);
      });
  }, [caseType, cases]);

  const adminSections = [
    {
      id: "newCase",
      title: "кейс мероприятия",
      columns: caseColumns,
      data: cases,
      path: "/admin/case",
    },
    // {
    //   id: "bestCase",
    //   title: "Раздел «Лучшие кейсы»",
    //   columns: bestCaseColumns,
    //   data: bestCases,
    //   path: "/admin/case",
    // },
    {
      id: "newSite",
      title: "Каталог площадок",
      columns: siteColums,
      data: sites,
      path: "/admin/site",
    },
    {
      id: "newEquipment",
      title: "Каталог оборудования",
      columns: equipmentColums,
      data: equipment,
      path: "/admin/equipment",
    },
    {
      id: "newReview",
      title: "Отзывы (Нас рекомендуют)",
      columns: reviewColumns,
      data: revlist,
      path: "/admin/review",
    },
    {
      id: "newBlog",
      title: "Блог #ЗаводШоу",
      columns: factoryColums,
      data: factory,
      path: "/admin/factory",
    },
    {
      id: "newBase",
      title: "Репетиционная база",
      columns: participantColumns,
      data: participant,
      path: "/admin/participant",
    },
    {
      id: "newVisualization",
      title: "3D-визуализация",
      columns: threeColumns,
      data: three,
      path: "/admin/three",
    },
    {
      id: "newTeam",
      title: "Команда",
      columns: teamColumns,
      data: team,
      path: "/admin/team",
    },
  ];

  return (
    <div className="adminPage">
      <AdminDataBox userInfo={userInfo} /> <br /> <br /> <br />
      {adminSections.map((section) =>
        section.title === "Репетиционная база" ? (
          <AdminSection1
            key={section.id}
            adding={userInfo?.adding}
            id={section.id}
            title={section.title}
            columns={section.columns}
            data={section.data}
            dataType={caseType}
            handle={handleSelBestCase}
            handleNewCreate={() => handleNewCreate(section.path)}
          />
        ) : (
          <AdminSection
            key={section.id}
            adding={userInfo?.adding}
            id={section.id}
            title={section.title}
            columns={section.columns}
            data={section.data}
            dataType={caseType}
            handle={handleSelBestCase}
            handleNewCreate={() => handleNewCreate(section.path)}
          />
        )
      )}
      <FormDialog
        opened={openDialog}
        idd={selectedId}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default Publist;
