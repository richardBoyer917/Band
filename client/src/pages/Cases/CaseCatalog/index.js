import { useEffect, useState } from "react"
import { SearchInputBasic } from "../../../components/Inputs"
import DetailSection from "./DetailSection"
import { getCases } from "../../../api/caseAPI"
import useScrollToTop from "../../../scrollTo/ScrollToTop"

const CaseCatalog = ({ type, catalogInfo }) => {
  useScrollToTop()

  const [cases, setCases] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(cases)

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearchTerm(value)

    const filtered = cases.filter((item) =>
      item.name.toLowerCase().includes(value) ||
      item.type.toLowerCase().includes(value) ||
      item.cities.some((city) => city.toLowerCase().includes(value))
    )
    setFilteredData(filtered)
  }

  useEffect(() => {
    getCases().then((data) => {
      data && setCases(data)
      setFilteredData(data)
    })
  }, [])
  return (
    <section className="wrapper">
      <div className="container">
        <div className="sectionWrapper section2">
          <div className="sectionHeader">
            <div className="alignCenter" style={{ gap: "27px" }}>
              <p className="x30" style={{ color: `var(--secondaryWhiteColor)` }}>
                Кейсы
              </p>
              <p className="x30" style={{ color: `#B0B0B0` }}>
                16
              </p>
            </div>
            <SearchInputBasic onChange={handleSearch} placeholder={catalogInfo.placeholder} />
          </div>
          <DetailSection
            type={type}
            data={filteredData}
            fieldInfo={catalogInfo.selectBoxInfo}
            checkText={catalogInfo.checkText}
          />
        </div>
      </div>
    </section>
  )
}

export default CaseCatalog