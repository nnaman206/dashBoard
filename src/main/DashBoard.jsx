import React from 'react'
import Calendar from '../components/Calendar'
import Card from '../components/Card'
import TopArticle from '../components/TopArticle'
import HelloCard from '../components/HelloCard'
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { Bs1Square } from "react-icons/bs";

function DashBoard() {
  return (
    
    <div className="bg-white ml-70 rounded-2xl shadow-md p-6 w-300 mx-auto mt-15">
    <div>
      <div className='-ml-70'><HelloCard/></div>
      <div className='ml-222 -mt-67'><Card 
      icon={<Bs1Square/>}
      title={"Hello"}
      description={"Naman Here"}
      iconColor=""
      /></div>
      <div className='ml-222 mt-2'><Card 
      icon={<Bs1Square/>}
      title={"Hello"}
      description={"Naman Here"}
      iconColor=""
      /></div>
      <div className='ml-222 mt-2'><Card 
      icon={<Bs1Square/>}
      title={"Hello"}
      description={"Naman Here"}
      iconColor=""
      /></div>
      
      <div className='mt-6 -ml-4'>
        <TopArticle
        icon={<FaFileInvoiceDollar/>}
        date={"12 Aug"}
        />
        </div>
        <div className='-ml-4'>
        <TopArticle
        icon={<FaFileInvoiceDollar/>}
        date={"12 Aug"}
        />
        </div>
        <div className='-ml-4'>
        <TopArticle
        icon={<FaFileInvoiceDollar/>}
        date={"12 Aug"}
        />
        </div>
      
      
      <div className='ml-220'><Calendar/></div>
    </div>
  </div>
  )
}

export default DashBoard
