import { master } from "../../assets"
import GearSmallBox from "../../components/GearSmallBox"

const MasterSection = ({ links }) => (
  <div className="sectionWrapper">
    <div className='sectionHeader section2' style={{ textAlign: 'center' }}>
      <p className='sectionTitle'>ЗАВОД ШОУ - это мастера</p>
    </div>
    <img className="bigVideoSquare" src={master} alt='master' />
    <GearSmallBox links={links} title="ЗАВОД ШОУ приглашает в свою команду!" text="Завод Шоу требуются специалисты как для работы на частных мероприятиях, так и в турах, концертах или спектаклях. Также возможен формат подработки" btnTitle="ЛЕРЕЙТИ В АНКЕТУ" />
  </div>
)

export default MasterSection