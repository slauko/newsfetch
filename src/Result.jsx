import React from 'react'
import Comment from './Comment'
import Story from './Story'

export default function Result({data}) {
  return (
    <div style={{border: "1px solid grey", padding: "5px"}}>
      <div style={{wordBreak: "break-word"}}>
        {data.comment_text ? <Comment data={data}/> : <Story data={data}/>}
      </div>
      
      
      <div>
        {`author: ${data.author} created: ${new Date(data.created_at).toLocaleString()}`}
      </div>
    </div>
  )
}