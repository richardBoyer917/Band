import { useState, useEffect } from "react";
import { deleteCase, getCases, getCasesWithCheckbox } from "../../api/caseAPI";
import { Button } from "@mui/material";
import { deleteSite, getSite } from "../../api/siteAPI";
import { deleteEquip, getEquips } from "../../api/equipAPI";
import { deleteFactory, getFactorys } from "../../api/facAPI";
import { deleteThree, getThrees } from "../../api/threeAPI";
import { deleteReview, getReviews } from "../../api/reviewAPI";
import endpoint from "../../config/config";
import { useNavigate } from "react-router-dom";
import { AdminSection } from "./AdminSection";
import { deleteParticipant, getParticipant } from "../../api/participantAPI";
import { getTeam } from "../../api/teamAPI";
import FormDialog from "../../components/Modal";
import { AdminDataBox } from "../../components/Boxes";
import {
  DataTableActionCard,
  DataTableMoveRowCard,
} from "../../components/Cards";

const Publist = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [caseType, setCaseType] = useState("Home");

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
      const temp = addId(data);
      setCases(temp);
    });
  };

  const handleEquipDelete = (index) => {
    deleteEquip(index).then((data) => {
      const temp = addId(data);
      setEquipment(temp);
    });
  };

  const handleSiteDelete = (index) => {
    deleteSite(index).then((data) => {
      const temp = addId(data);
      setSites(temp);
    });
  };

  const handleRevDelete = (index) => {
    deleteReview(index).then((data) => {
      const temp = addId(data);
      setRevlist(temp);
    });
  };

  const handleFactoryDelete = (index) => {
    deleteFactory(index).then((data) => {
      const temp = addId(data);
      setFactory(temp);
    });
  };

  const handleThreeDelete = (index) => {
    deleteThree(index).then((data) => {
      const temp = addId(data);
      setThree(temp);
    });
  };

  const handleParticipantDelete = (index) => {
    deleteParticipant(index).then((data) => {
      const temp = addId(data);
      setParticipant(temp);
    });
  };

  const addId = (data) => {
    let temp = [];
    data.map(
      (item, index) => ((temp[index] = item), (temp[index].id = index + 1))
    );
    return temp;
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

  const idColumn = { field: "id", headerName: "ID", flex: 0.5 };
  const createMediaColumn = (field, headerName, mediaType) => ({
    field,
    headerName,
    flex: 1,
    renderCell: (params) => {
      const src =
        field === "images"
          ? `${endpoint}/uploads/${mediaType}/${params.value[0]}`
          : `${endpoint}/uploads/${mediaType}/${params.value}`;

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
    idColumn,
    { field: "name", headerName: "Имя", flex: 3.5 },
    // { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "type", headerName: "Тип", flex: 1.5 },
    { field: "venue", headerName: "Адрес", flex: 1 },
    { field: "guests", headerName: "Гости", flex: 0.5 },
    createMediaColumn("video", "Дело", "cases"),
    createActionColumn("case", handleDelete),
    {
      field: "addAction",
      headerName: "Добавить решение",
      flex: 1.5,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenDialog(params.row._id)}
        >
          Добавить
        </Button>
      ),
    },
  ];

  const [bestCases, setBestCases] = useState([]);
  const bestCaseColumns = [
    idColumn,
    { field: "name", headerName: "Кейс", flex: 3.5 },
    { field: "type", headerName: "Тип", flex: 1.5 },
    createMediaColumn("video", "Дело", "cases"),
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
    idColumn,
    { field: "name", headerName: "Имя", flex: 1 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "type", headerName: "Тип", flex: 1 },
    { field: "capacity", headerName: "Вместимость", flex: 1 },
    { field: "address", headerName: "Адрес", flex: 1 },
    { field: "link_page", headerName: "Ссылка Страница", flex: 1 },
    createMediaColumn("video", "Сайт", "site"),
    createActionColumn("site", handleSiteDelete),
  ];

  const [equipment, setEquipment] = useState([]);
  const equipmentColums = [
    idColumn,
    { field: "name", headerName: "Имя", flex: 1 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "type", headerName: "Тип", flex: 1 },
    { field: "description", headerName: "Описание", flex: 2 },
    { field: "manufacturer", headerName: "Производитель", flex: 1 },
    createMediaColumn("images", "Оборудование", "equipment"),
    createActionColumn("equipment", handleEquipDelete),
  ];

  const [revlist, setRevlist] = useState([]);
  const reviewColumns = [
    idColumn,
    { field: "type", headerName: "Тип", flex: 1 },
    { field: "name", headerName: "Имя", flex: 1 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "displayType", headerName: "Тип", flex: 1 },
    { field: "content", headerName: "Содержание", flex: 2 },
    createActionColumn(
      "equipment",
      handleRevDelete,
      "/services/visualization",
      "customerReviewSection"
    ),
  ];

  const [factory, setFactory] = useState([]);
  const factoryColums = [
    idColumn,
    { field: "title", headerName: "Название", flex: 2 },
    { field: "queue", headerName: "Очередь", flex: 1 },
    { field: "description", headerName: "Описание", flex: 3 },
    createMediaColumn("video", "Завод Показать", "factory"),
    createActionColumn("factory", handleFactoryDelete, "/", "blogSection"),
  ];

  const [participant, setParticipant] = useState([]);
  const participantColumns = [
    idColumn,
    { field: "name", headerName: "Имя", flex: 4 },
    createMediaColumn("image", "Avatar", "participant"),
    createActionColumn(
      "participant",
      handleParticipantDelete,
      "/services/showdevelopment",
      "userLists"
    ),
  ];

  const [three, setThree] = useState([]);
  const threeColumns = [
    idColumn,
    { field: "title1", headerName: "Название1", flex: 2 },
    { field: "title2", headerName: "Название2", flex: 2 },
    createMediaColumn("video", "3D-визуализация", "three_d"),
    createActionColumn("three", handleThreeDelete),
  ];

  const [team, setTeam] = useState([]);
  const teamColumns = [
    idColumn,
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
      const temp = addId(data);
      setCases(temp);
    });
    getCasesWithCheckbox(caseType, 9).then((data) => {
      const temp = addId(data);
      setBestCases(temp);
    });

    getSite().then((data) => {
      const temp = addId(data);
      setSites(temp);
    });
    getEquips().then((data) => {
      const temp = addId(data);
      setEquipment(temp);
    });
    getThrees().then((data) => {
      const temp = addId(data);
      setThree(temp);
    });
    getFactorys().then((data) => {
      const temp = addId(data);
      setFactory(temp);
    });
    getReviews().then((data) => {
      const temp = addId(data);
      setRevlist(temp);
    });
    getParticipant().then((data) => {
      const temp = addId(data);
      setParticipant(temp);
    });
    getTeam().then((data) => {
      const temp = addId(data);
      setTeam(temp);
    });
  }, []);

  useEffect(() => {
    getCasesWithCheckbox(caseType, 9)
      .then((data) => {
        const temp = addId(data);
        setBestCases(temp);
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
    {
      id: "bestCase",
      title: "Раздел «Лучшие кейсы»",
      columns: bestCaseColumns,
      data: bestCases,
      path: "/admin/case",
    },
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
      <AdminDataBox /> <br /> <br /> <br />
      {adminSections.map((section) => (
        <AdminSection
          key={section.id}
          id={section.id}
          title={section.title}
          columns={section.columns}
          data={section.data}
          dataType={caseType}
          handle={handleSelBestCase}
          handleNewCreate={() => handleNewCreate(section.path)}
        />
      ))}
      <FormDialog
        opened={openDialog}
        idd={selectedId}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default Publist;
