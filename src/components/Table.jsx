import React from 'react'
import { useState } from 'react';
import './table.css'
import { RiBarChartGroupedFill } from "react-icons/ri";

import { myData } from '../constants';

import { BsSearch } from 'react-icons/bs'
import { HiFilter } from 'react-icons/hi'
import { BiListPlus, BiRefresh } from 'react-icons/bi'

const Table = () => {

  const [table, setTable] = React.useState("");
  const [items, setItems] = useState(myData);

  // passing a parameter taken from button value
  const filterItem = (dataName) => {
    // Here let's create an updated Item values
    let updatedItems = myData.filter((namefromdata) => {
      // now return what you wanna show in Output
      return namefromdata.name === dataName;
    })
    setItems(updatedItems)

    let items = document.querySelectorAll('.item')

    items.forEach((item) => {
      item.addEventListener('click', () => {
        items.forEach((item) => {
          item.classList.remove('active')
        })
        item.classList.add('active')

        // let all = item.getAttribute('id')
        // console.log(all)
      })
    })
  }

  return (
    <>
      <div className="header">

        <div className="wrapper">
          <p>All Projects</p>
          <div className="filter">
            <div className="input-box">
              <button className="btn"> <BsSearch color={'orange'} fontSize={18} /> </button>
              <input type="text" placeholder='Search ...' onChange={(e) => setTable(e.target.value)} />
            </div>
            <div className="filtering filter-drop">
              <HiFilter fontSize={20} color={'orange'} style={{ cursor: 'pointer', marginRight: '10px' }} />
              <div>
                <span>Filter</span>

                <div className="dropdown">
                  <ul id='#'>
                    <li className='item' onClick={() => filterItem(`IIT-JEE (PCMB)`)} value="IIT">IIT</li>
                    <li className='item' onClick={() => filterItem(`ICSE : Class X`)} value="CBSE">ICSE</li>
                    <li className='item' onClick={() => filterItem(`ISC : Class XI`)} value="PCMB">ICE</li>
                    <li className='item' onClick={() => filterItem(`HINDI`)} value="HINDI">HINDI</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="custom">
              <BiRefresh fontSize={20} color={'orange'} style={{ cursor: 'pointer', marginRight: '10px' }} />
              <span style={{ cursor: 'pointer' }} onClick={() => setItems(myData)} >Refresh Data</span>
            </div>
            <div className="custom">
              <BiListPlus fontSize={20} color={'orange'} style={{ cursor: 'pointer', marginRight: '10px' }} />
              <span>Customised</span>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <tr>
            <th><input type="checkbox" /></th>
            <th>
              <div className="table-heading center">
                <p>Name</p>
                <span><RiBarChartGroupedFill /></span>
              </div>
            </th>
            <th>Objectives</th>
            <th>Task</th>
            <th>Venders</th>
            <th>Members</th>
          </tr>

          {items.filter(data => data.name.toLowerCase().includes(table)).map((item, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{item.name}</td>
              <td>{item.objective}</td>
              <td>{item.task}</td>
              <td>{item.venders}</td>
              <td>{item.members + ","}</td>
            </tr>

          ))}
        </table>

      </div>
    </>
  )
}

export default Table