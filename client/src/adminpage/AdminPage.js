import Publist from "./components/Publist"
import { AdminPageWrapper } from "./components/AdminSection"

const AdminPage = () => (
  <AdminPageWrapper content={<Publist />} />
)

export default AdminPage