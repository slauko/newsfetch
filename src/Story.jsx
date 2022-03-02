import React from 'react'

export default function Story({data}) {
  return (
    <>
      <a href={data.url}>{`${data.title}`}</a><br></br>
      <a href={data.url}>{data.url ? `(${data.url.substr(0,50)}` : null }</a>
    </>
  )
}
