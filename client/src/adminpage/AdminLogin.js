import { useState } from "react"
import { adminLoginLogo } from "../assets"
import { Input } from "../components/Inputs"
import { DefaultButton } from "../components/Buttons"
import { AdminPageWrapper } from "./components/AdminSection"

import './style.css'

const AdminLogin = () => {

  const [adminInfo, setAdminInfo] = useState({
    email: '', password: '',
  })
  const inputinfo = [
    {
      title: 'Электронная почта',
      name: 'email',
      type: 'email',
      placeholder: '',
    },
    {
      title: 'Пароль',
      name: 'password',
      type: 'password',
      placeholder: '',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdminInfo({ ...adminInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('adminInfo: ', adminInfo)
  }

  const content = (
    <div className="sectionWrapper itemCenter">
      <form className="adminLoginSection" onSubmit={handleSubmit}>
        <div className="adminLoginHeader">
          <img src={adminLoginLogo} alt="adminLoginLogo" />
          <p className="adminLoginTitle">Страница<br />администратора</p>
        </div>
        {inputinfo.map((item, index) => (
          <div key={index}>
            <p className='x16' style={{ marginBottom: '12px' }}>{item.title}</p>
            <Input item={item} handleChange={handleChange} />
          </div>
        ))}
        <div className="alignCenter" style={{ gap: '30px' }}>
          <DefaultButton type='submit' title='Войти на страницу' />
          <p className='x14' >Данные для входа доступны по запросу: <br /> <span style={{ fontWeight: 700 }}>admin@zavodshow.ru</span></p>
        </div>
      </form>
    </div>
  )

  return (

    <AdminPageWrapper content={content} />

  )
}

export default AdminLogin