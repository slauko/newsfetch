import React from 'react'
import Result from './Result'

export default function ResultBox({response}) {
  const results = response.hits;
  return (
    results.map((result)=>{
      return <Result data={result} key={result.objectID}/>  
    })
  )
}
