import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  adminUser,
  darkEmail,
  darkLogout,
  darkPencil,
  greyPencil,
  redTrash,
  white3d,
  whitePlay,
} from "../../assets";
import { ArrowDefaultButton, BlackButton, TabButton1 } from "../Buttons";
import { DataTable } from "../Tables";
import { adminDirectoryInfo } from "../../constant/group";
import { PermissionBadge } from "../Badges";
import "../../styles/components/box.css";
import { TitleAdminUserEdit } from "../Titles";
import { logout } from "../../api/authAPI";
import { changeEmail } from "../../api/adminAPI";

const BigVideoBox = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const navigate = useNavigate();
  const handleLink = (url) => {
    navigate(url);
  };

  return (
    <div className="sectionWrapper" style={{ paddingLeft: 0, paddingRight: 0 }}>
      {item.title && (
        <div
          className={`sectionHeader section2 ${
            item.titleCenter ? "itemCenter" : "sectionHeaderTitleSquare"
          }`}
        >
          <p className={`sectionTitle `}>{item.title}</p>
        </div>
      )}
      <div className="bigVideoSquare">
        <video
          controls
          ref={videoRef}
          className="video"
          width="600"
          onClick={handlePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          src={item.src}
        >
          {/* <source src={`${item.src}`} type="video/mp4" /> */}
        </video>
        {!isPlaying && (
          <img
            src={whitePlay}
            alt="whitePlay"
            className="bigPlayIcon"
            onClick={handlePlayPause}
          />
        )}
      </div>
      <div className="spaceBetween bigVideoSquareFooter">
        <p className="x24Font_2">{item.videoTitle}</p>
        <p className="x18Font_2">{item.videoDescription}</p>
        <ArrowDefaultButton
          title="ПОДРОБНЕЕ"
          onClick={() => {
            handleLink("/cases");
          }}
        />
      </div>
    </div>
  );
};

const BigImageBox = ({ item }) => {
  return (
    <div className="sectionWrapper">
      <img src={item.src} alt={item.src} />
    </div>
  );
};

const Big3DBox = ({ item }) => (
  <div className="sectionWrapper" style={{ paddingLeft: 0, paddingRight: 0 }}>
    {!item.subTitle ? (
      <div className="sectionHeader" style={{ textAlign: "center" }}>
        <p className="sectionTitle">{item.title}</p>
      </div>
    ) : (
      <div className="flexWrapBetween section2">
        <div className="sectionHeader">
          <p className="sectionTitle">{item.title}</p>
        </div>
        <p
          className="x18font_2"
          style={{ maxWidth: "310px", color: "var(--secondaryWhiteColor)" }}
        >
          {item.subTitle}
        </p>
      </div>
    )}
    <div className="bigVideoSquare">
      <img
        src={item.src}
        alt="3d"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <div className="itemCenter bigPlayIcon">
        <img
          src={white3d}
          alt="whitePlay"
          style={{ width: "clamp(69px, 12vw, 151px)" }}
        />
      </div>
    </div>
  </div>
);

const BigCaseVideoBox = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="bigVideoSquare">
        <video
          controls
          ref={videoRef}
          className="video"
          width="600"
          onClick={handlePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          src={src}
        />
        {!isPlaying && (
          <img
            src={whitePlay}
            alt="whitePlay"
            className="bigPlayIcon"
            onClick={handlePlayPause}
          />
        )}
      </div>
    </div>
  );
};

const TabBox = ({ title }) => (
  <button className="caseEventTab itemCenter x14_1">{title}</button>
);

const AdminDataBox = ({ userInfo }) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  const handleChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handleSend = () => {
    changeEmail({ email: userData?.email }, userData?.id).then((data) => {
      data
        ? alert("Письмо отправлено на почту")
        : alert("Ошибка отправки письма");
    });
  };

  return (
    <div className="adminDataSection" id="adminDataSection">
      <p className="adminDataTitle sectionTitle">
        Данные
        <br />
        аккаунта
      </p>
      <div className="adminInfoBox" style={{ width: "315px" }}>
        <div className="alignCenter">
          <img src={adminUser} alt="adminUser" />
          <div>
            {userData?.adding !== 0 && <PermissionBadge title="добавить" />}
            {userData?.editing !== 0 && <PermissionBadge title="изменить" />}
            {userData?.deleting !== 0 && <PermissionBadge title="удалить" />}
          </div>
        </div>
        <div className="adminInfoSquare">
          <p className="x20Font_1">
            {userData?.name}
            <br />
            {userData?.lastname}
          </p>
          <p className="adminCaptionTitle" style={{ paddingTop: "5px" }}>
            {userData?.role === "user" ? "Пользователь" : "Суперадминистратор"}
          </p>
        </div>
        <div>
          <TabButton1
            icon={darkLogout}
            onClick={handleLogout}
            title="Выбрать файл"
          />
        </div>
      </div>
      <div
        className="adminInfoBox"
        style={{
          width: "460px",
          paddingTop: "54.5px",
          paddingBottom: "54.5px",
        }}
      >
        <div className="adminInfoSquare">
          <p className="x20Font_1">Электронная почта</p>
          <input
            className="adminCaptionTitle"
            style={{
              marginTop: "5px",
              marginBottom: "11px",
              border: !disabled && "none",
              background: "transparent",
            }}
            onChange={handleChange}
            value={userData?.email || ""}
            disabled={!disabled}
          />
          <TabButton1
            onClick={() => setDisabled(!disabled)}
            icon={darkPencil}
            title="Изменить адрес"
          />
        </div>
        <div className="adminInfoSquare">
          <p className="x20Font_1" style={{ paddingBottom: "10px" }}>
            Пароль
          </p>
          <TabButton1
            icon={darkEmail}
            onClick={handleSend}
            title="Отправить на эл. почту"
          />
        </div>
      </div>
    </div>
  );
};

const AdminDirectoryBox = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const directoryColumns = [
    {
      field: "fullName",
      headerName: "Имя пользователя",
      renderCell: (params) => params.row.firstName + " " + params.row.lastName,
      flex: 2,
    },
    { field: "email", headerName: "Электронная почта", flex: 2 },
    {
      field: "permission",
      headerName: "Права",
      flex: 2,
      renderCell: (params) => (
        <>
          {params?.row?.permission?.map((title, index) => (
            <PermissionBadge key={index} title={title} />
          ))}
        </>
      ),
    },
    {
      field: "action",
      headerName: "",
      flex: 2,
      renderCell: (params) => (
        <div
          className="alignCenter adminDirectoryEdit"
          style={{ height: "100%" }}
        >
          <TitleAdminUserEdit
            onClick={() => handleEdit(params.row)}
            img={greyPencil}
            title="Изменить данные пользователя"
          />
          <TitleAdminUserEdit
            onClick={() => handleDelete(params.row.id)}
            img={redTrash}
            // title={"Удалить пользователя"}
          />
        </div>
      ),
    },
  ];

  const addId = (data) => {
    let temp = [];
    data.map(
      (item, index) => ((temp[index] = item), (temp[index].id = index + 1))
    );
    return temp;
  };

  const handleEdit = (data) => {
    navigate("/admin/edit", { state: { data } });
  };

  const handleDelete = (data) => {
    console.log("deleteData: ", data);
  };

  useEffect(() => {
    let temp = addId(adminDirectoryInfo);
    setData(temp);
  }, []);

  return (
    <div className="adminDirectorySection" id="adminDirectorySection">
      <div className="spaceBetween" style={{ width: "100%" }}>
        <p className="adminDirectoryTitle">Каталог пользователей</p>
        <BlackButton
          onClick={() => navigate("/admin/create")}
          title="Добавить пользователя"
        />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <DataTable data={data} columns={directoryColumns} />
      </div>
    </div>
  );
};

export {
  AdminDataBox,
  AdminDirectoryBox,
  BigVideoBox,
  Big3DBox,
  BigImageBox,
  BigCaseVideoBox,
  TabBox,
};
