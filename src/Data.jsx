import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useSelectors } from './Redux/reducer'
import { userThunk } from './Redux/reducer'
import './App.css'

const Data = () => {
    const dispatch = useDispatch()
    const userData = useSelector(useSelectors)
    useEffect(()=>{
        dispatch(userThunk())
    },[])
console.log(userData)
  return (
    
    <div>
      {userData.map((item,index)=>{
        return (
        <div key={index}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <hr />
        </div>
        )
      })}
    </div>
  )
}

export default Data
