import { useEffect, useState } from "react"
import { CheckBox1, Input } from "../../../components/Inputs"
import { AdminPageWrapper } from "../AdminSection"
import { BlackButton } from "../../../components/Buttons"
import { useLocation } from "react-router-dom"

const CreateUser = () => {

  const location = useLocation()
  const { data } = location.state || {}

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    permission: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value, })
  }

  const handleChecked = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      permission: checked
        ? [...prevData.permission, value]
        : prevData.permission.filter((perm) => perm !== value),
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('data: ', formData)
  }

  const inputinfo = [
    {
      title: 'Имя',
      name: 'firstName',
      type: 'text',
      placeholder: 'Входная Имя',
    },
    {
      title: 'Фамилия',
      name: 'lastName',
      type: 'text',
      placeholder: 'Входная Фамилия',
    },
    {
      title: 'Электронная почта',
      name: 'email',
      type: 'email',
      placeholder: 'Входная Электронная почта',
    },
  ]

  const permissionInfo = [
    { value: 'редактировать', title: 'Редактировать данные' },
    { value: 'добавлять', title: 'Добавлять новые данные' },
    { value: 'удалять', title: 'Удалять данные' },
  ]

  useEffect(() => {
    data && setFormData(data)
  }, [])

  const content = (
    <form className="adminDirectorySection" onSubmit={handleSubmit}>
      <div className='alignCenter' style={{ marginBottom: '40px' }}>
        <p className='adminDirectoryTitle' style={{ marginRight: '23px', }}>{data ? 'Пользователь' : 'Новый пользователь'}</p>
        {data && <p className="x20Font_1" style={{ color: `var(--badgeColor)` }}>Петр Петров</p>}
      </div>
      <div className="flexWrap" style={{ gap: '12px', marginBottom: '28px' }}>
        {inputinfo.map((item, index) => (
          <div key={index} style={{ width: '45%', paddingRight: '4%' }}>
            <p className='x16' style={{ marginBottom: '12px' }}>{item.title}</p>
            <Input color='#EFEFEF' value={formData[item.name] || ''} item={item} handleChange={handleChange} />
          </div>
        ))}
        <div style={{ width: '45%', paddingRight: '4%' }}>
          <p className='x16' style={{ marginBottom: '10px' }}>Права пользователя на сайте</p>
          {permissionInfo.map((item, index) => (
            <CheckBox1 key={index} textColor='#171717' title={item.title} value={item.value} checked={formData?.permission?.includes(item.value)} onChange={handleChecked} />
            // console.log('checked: ', formData?.permission?.includes(item.value))
          ))}
        </div>
      </div>
      <BlackButton type='submit' title={data ? 'изменить данные пользователя' : 'Добавить пользователя'} />
    </form>
  )

  return (
    <AdminPageWrapper content={content} />
  )
}

export default CreateUser