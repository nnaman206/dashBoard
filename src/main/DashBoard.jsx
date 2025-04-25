import React from 'react'
import Calendar from '../components/Calendar'
import Card from '../components/Card'
import TopArticle from '../components/TopArticle'
import HelloCard from '../components/HelloCard'
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { Bs1Square } from "react-icons/bs";
import CalenderArticle from '../components/CalenderArticle'

function DashBoard() {
  return (
    <div className="bg-white ml-70 rounded-2xl shadow-md p-40 w-300 mx-auto mt-10">
    {/* <div className=" -ml-40 rounded-2xl  p-40 w-300 mx-auto -mt-35"> */}
    <div>
      <div className='-ml-90 -mt-36'><HelloCard/></div>
      <div className='ml-180 -mt-58'><Card 
      icon={<Bs1Square/>}
      title={"Hello"}
      description={"Naman Here"}
      iconColor=""
      /></div>
      <div className='ml-180 mt-2'><Card 
      icon={<Bs1Square/>}
      title={"Hello"}
      description={"Naman Here"}
      iconColor=""
      /></div>
      <div className='ml-180 mt-2'><Card 
      icon={<Bs1Square/>}
      title={"Hello"}
      description={"Naman Here"}
      iconColor=""
      /></div>
      
      <div className=' -ml-38'>
        <TopArticle
        icon={<FaFileInvoiceDollar/>}
        date={"12 Aug"}
        />
        </div>
        <div className='-ml-38'>
        <TopArticle
        icon={<FaFileInvoiceDollar/>}
        date={"12 Aug"}
        />
        </div>
        <div className='-ml-38'>
        <TopArticle
        icon={<FaFileInvoiceDollar/>}
        date={"12 Aug"}
        />
        </div>
      
      
      <div className='ml-180 -mt-82 '><Calendar/></div>
      {/* <div><CalenderArticle
      date={"12:30"}
      /></div> */}
    </div>
  {/* </div> */}
  </div>
  )
}

export default DashBoard
