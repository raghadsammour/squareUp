import "./ProcessTitle.css"
const ProcessTitle = ({title,description,info}) => {
  return (
    <div className='RB_Process_Title'>
        <h2 className='RB_Adress'>{title}</h2>
        <p className='RB_Des'>{description}</p>
        <p className='RB_In'>{info}</p>
    </div>
  )
}

export default ProcessTitle