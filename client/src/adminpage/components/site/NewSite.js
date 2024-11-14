import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.module.css";
import { insertSite, updateSite } from "../../../api/siteAPI";
import { CreatePageWrapper } from "../AdminSection";
import { Input, SelectBox } from "../../../components/Inputs";
import { TabButton } from "../../../components/Buttons";
import { darkAdd } from "../../../assets";
import MultipleValueTextInput from "react-multivalue-text-input";

const NewSite = () => {
  const location = useLocation();
  const { Data } = location.state || {};
  const [cities, setCities] = useState(Data?.cities || []);

  const [formData, setFormData] = useState({
    name: Data?.name || "",
    site_type: Data?.site_type[0] || "",
    capacity: Data?.capacity || "",
    address: Data?.address || "",
    link_page: Data?.link_page || "",
    tags: Data?.tags || [],
    equipment_type: Data?.equipment_type || [],
    blog_type: Data?.blog_type || [],
    queue: Data?.queue || 0,
    city: Data?.city[0] || "",
  });

  const inputinfo = [
    {
      title: "ФИО",
      name: "name",
      type: "text",
      placeholder: "ВХОДНАЯ ФИО",
    },
    {
      title: "ТИП ПЛОЩАДКИ",
      name: "site_type",
      type: "text",
      placeholder: "ВХОДНАЯ ТИП",
      option: [
        "Рестораны",
        "Конференц-залы",
        "Загородные площадки",
        "Концертные залы",
      ],
    },
    {
      title: "ЕМКОСТЬ",
      name: "capacity",
      type: "number",
      placeholder: "ВХОДНАЯ ЕМКОСТЬ",
    },
    {
      title: "АДРЕС",
      name: "address",
      type: "text",
      placeholder: "ВХОДНАЯ АДРЕС",
    },
    {
      title: "ССЫЛКА СТРАНИЦА",
      name: "link_page",
      type: "text",
      placeholder: "ВХОДНАЯ ССЫЛКА СТРАНИЦА",
    },
    {
      title: "ГОРОД",
      name: "city",
      type: "text",
      placeholder: "ВХОДНАЯ ГОРОД",
    },
  ];

  const tagCurrencies = [
    "Свет",
    "Звук",
    "Видео",
    "3D",
    "Одежда сцены",
    "Репетиционная база",
  ];
  const typeEquipment = [
    "Парковка",
    "Гримёрные комнаты",
    "Звуковое оборудование",
    "Световое оборудование",
    "Проекторы и экраны",
  ];
  const typeBlog = ["частное", "тур", "корпоративное", "городское"];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVideoChange = (e) => {
    setFormData({ ...formData, video: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "tags") {
        formData[key].forEach((item) => newFormData.append("tags[]", item));
      } else if (key === "city") {
        newFormData.append("city[]", formData[key]);
      } else if (key === "equipment_type") {
        formData[key].forEach((item) =>
          newFormData.append("equipment_type[]", item)
        );
      } else if (key === "site_type") {
        newFormData.append("site_type[]", formData[key]);
      } else if (key === "blog_type") {
        formData[key].forEach((item) =>
          newFormData.append("blog_type[]", item)
        );
      } else {
        newFormData.append(key, formData[key]);
      }
    });

    Data
      ? updateSite(Data.id, newFormData).then((data) => {
          if (data && data.error) {
            console.log(data.error);
          } else {
            navigate("/admin");
          }
        })
      : insertSite(newFormData).then((data) => {
          if (data && data.error) {
            console.log(data.error);
          } else {
            navigate("/admin");
          }
        });
  };

  return (
    <CreatePageWrapper
      title="Введите данные вашего сайта здесь"
      handleSubmit={handleSubmit}
      content={
        <>
          <TabButton
            icon={darkAdd}
            title="Выбрать файл"
            onChange={handleVideoChange}
          />
          {formData.video && (
            <Typography> Выбранный файл: {formData.video.name}</Typography>
          )}

          {inputinfo?.map((item, index) =>
            index !== 1 ? (
              <div key={index}>
                <p className="x16" style={{ marginBottom: "12px" }}>
                  {item.title}
                </p>
                <Input
                  value={formData[item.name]}
                  item={item}
                  handleChange={handleChange}
                />
              </div>
            ) : (
              <div key={index}>
                <p className="x16">{item.title}</p>
                <SelectBox
                  value={formData[item.name]}
                  item={item}
                  handleSelect={handleChange}
                />
              </div>
            )
          )}

          <Box sx={{ width: "100%" }}>
            <Typography variant="h6">Теги вместимости</Typography>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={tagCurrencies}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={formData?.tags}
              onChange={(event, newValue) => {
                setFormData({ ...formData, tags: newValue });
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Click to Add more" />
              )}
            />
          </Box>
          <div>
            <p className="x16" style={{ marginBottom: "12px" }}>
              Очередь
            </p>
            <Slider
              min={0}
              max={100}
              value={formData.queue}
              name="queue"
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </div>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6">ВИДЫ ОСНАЩЕНИЯ</Typography>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={typeEquipment}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={formData?.equipment_type}
              onChange={(event, newValue) => {
                setFormData({ ...formData, equipment_type: newValue });
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Click to Add more" />
              )}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6">ТИП КЕЙСА</Typography>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={typeBlog}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={formData?.blog_type}
              onChange={(event, newValue) => {
                setFormData({ ...formData, blog_type: newValue });
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Click to Add more" />
              )}
            />
          </Box>
        </>
      }
    />
  );
};

export default NewSite;
