import { Header } from "../../components/header";
import DashboardProvider from "../dashboard-provider";


export default async function DashboardPage() {
  

  return (
    <DashboardProvider>
      <Header />  
    </DashboardProvider>
  );
}