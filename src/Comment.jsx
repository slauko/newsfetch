import React from 'react'

export default function Comment({data}) {
  return (
    <div dangerouslySetInnerHTML={{__html: data.comment_text}}></div>
  )
}
