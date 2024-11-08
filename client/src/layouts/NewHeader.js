import { useState, useEffect } from "react"
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom"
import { DefaultButton, ScrollSpyButton } from '../components/Buttons'
import HeaderWrapper from "./HeaderWrapp"
import { adminUser, lightLogout, logo } from "../assets"
import "../styles/layouts/layout.css"

const NewHeader = ({ setIsAdminPage }) => {

  const navigate = useNavigate()
  const location = useLocation()
  const [isShrunk, setIsShrunk] = useState(false)

  const adminLinkInfo = {
    admin: {
      title: 'Страница администратора',
      link: '',
      smallLink: [
        { title: 'кейсы', link: 'newCase' },
        { title: 'каталог площадок', link: 'newSite' },
        { title: 'каталог оборудования', link: 'newEquipment' },
        { title: 'отзывы', link: 'newReview' },
        { title: 'блог', link: 'newBlog' },
        { title: 'реп. база', link: 'newBase' },
        { title: '3D-визуализация', link: 'newVisualization' },
        { title: 'команда', link: 'newTeam' },
      ],
    },
    setting: {
      title: 'Настройки аккаунта',
      link: 'setting',
      smallLink: [
        { title: 'данные аккаунта', link: 'adminDataSection' },
        { title: 'каталог пользователей', link: 'adminDirectorySection' },
      ],
    },
    create: {
      title: 'Создание пользователя',
      link: 'create',
    },
    edit: {
      title: 'Изменение данных пользователя',
      link: 'edit',
    },
  }

  const [addLink, setAddLink] = useState(adminLinkInfo.admin);

  const handleLogout = () => {
    alert('logout')
  }

  const handleSetting = () => {
    navigate('/admin/setting')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsShrunk(true)
      } else {
        setIsShrunk(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const currentPath = location.pathname
    const pathArray = currentPath.split('/')
    const lastPathSegment = pathArray[pathArray.length - 1]
    if (adminLinkInfo[lastPathSegment]) {
      setAddLink(adminLinkInfo[lastPathSegment])
    }
  }, [location.pathname])

  return (
    <HeaderWrapper
      content={
        <>
          <div className={`spaceBetween topHeader ${isShrunk ? 'scrolled' : ''}`}>
            <div className="alignCenter">
              <img onClick={() => { setIsAdminPage(false); navigate('/'); }} src={logo} alt="Company Logo" style={{ cursor: 'pointer' }} />
              <div className="adminHeaderLink">
                <RouterLink to='/admin'>Страница администратора</RouterLink>
                {(addLink.link === 'create' || addLink.link === 'edit') && (
                  <>
                    <span>&nbsp;&nbsp; / &nbsp;&nbsp;</span>
                    <RouterLink to='/admin/setting'>Настройки аккаунта</RouterLink>
                  </>
                )}
                {addLink.link !== '' && (
                  <>
                    <span>&nbsp;&nbsp; / &nbsp;&nbsp;</span>
                    <RouterLink to={`/admin/${addLink.link}`}>{addLink.title}</RouterLink>
                  </>
                )}
              </div>
            </div>
            <div className="requestBtn alignCenter" style={{ gap: '15px' }}>
              <div className="adminHeaderLink">
                <span style={{ fontSize: '12px' }}>Иван И.</span>
              </div>
              <img className="headerAvatar" src={adminUser} alt="Admin User Avatar" />
              <DefaultButton onClick={handleSetting} title="настройки" />
              <img src={lightLogout} alt="Logout Icon" onClick={handleLogout} style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <hr />
          {addLink.smallLink && (
            <div className="container">
              <div className="adminHeaderScrollLink">
                {addLink.smallLink.map((item, index) => (
                  <ScrollSpyButton key={index} to={item.link} content={item.title} />
                ))}
              </div>
            </div>
          )}
          {isShrunk && <hr />}
        </>
      }
    />
  )
}

export default NewHeader