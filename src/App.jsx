import Header from './components/Header'
import Card from './components/Card'
import TopArticle from './components/TopArticle';
import { FaFileInvoiceDollar } from "react-icons/fa6";
function App() {
  

  return (
    <>
     <TopArticle 
     icon={<FaFileInvoiceDollar/>}
     title={"HELLO"}
     date={"15 Aug"}
     />
    </>
  )
}

export default App
