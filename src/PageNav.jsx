import React from 'react'

export default function PageNav(props) {
  const currentPage = props.response.page ? props.response.page : 0;
  let buttons = [];
  
  buttons[buttons.length+1] = <button onClick={()=>{
    if(props.response.nbPages && currentPage<props.response.nbPages){
      props.setPage(0);
    }
  }}>{"<<"}</button>
  buttons[buttons.length+1] = <button onClick={()=>{
    if(currentPage>0){
      props.setPage(currentPage-1);
    }
  }}>{"<"}</button>

  if(props.response.nbPages){
    for (let index = Math.max(currentPage-6, 0); index < Math.min(currentPage+6, props.response.nbPages); index++) {
      const style = currentPage===index ? {backgroundColor: "red"} : {};
      buttons[buttons.length+1] = <button onClick={()=>props.setPage(index)} style={style}>{index+1}</button>
    }  
  }
  buttons[buttons.length+1] = <button onClick={()=>{
    if(props.response.nbPages && currentPage<props.response.nbPages){
      props.setPage(currentPage+1);
    }
  }}>{">"}</button>
  buttons[buttons.length+1] = <button onClick={()=>{
    if(props.response.nbPages && currentPage<props.response.nbPages){
      props.setPage(props.response.nbPages-1);
    }
  }}>{">>"}</button>

  return (
    <div>
      {buttons.map((button)=>{return button})}
      {props.response.nbPages ? ` (${props.response.nbPages} pages)` : null}
    </div>
  )
}
