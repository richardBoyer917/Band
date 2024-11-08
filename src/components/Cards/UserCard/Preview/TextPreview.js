import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import './preview.css'
import CustomerModal from "../../../Modals";

const TextPreview = (props) => {
  const { name, avatar, content, open, setOpen } = props;

  const handleClose = () => setOpen(false);

  const textContent = (
    <div className="textPreviewContainer">
      <div className="spaceBetween">
        <div className="alignCenter">
          <img
            style={{
              width: "75px",
              height: "74px",
              borderRadius: "50%",
            }}
            src={avatar}
            alt={avatar}
          />
          <p className="cardBigTitle" style={{ marginLeft: '22px' }}>
            {name}
          </p>
        </div>
        <IconButton style={{ marginTop: '-50px' }} onClick={handleClose}>
          <CloseIcon sx={{ color: "var(--primaryBgColor)" }} />
        </IconButton>
      </div>
      <div className="textPreviewContent">
        {content}
      </div>
    </div>
  )

  return (
    <CustomerModal open={open} setOpen={setOpen} content={textContent} />

  )
}

export default TextPreview