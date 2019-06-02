import React from 'react'
import './Tour.scss'
class Tour extends React.Component{
  constructor(){
      super()
      this.state={
        showInfo:false
      }
      this.clickInfo=this.clickInfo.bind(this)
  }

  clickInfo(){
    return({
      showInfo:!this.showInfo
    })
  }
   render(){
    const{city,img,name,info}= this.props.tour
    return(
        <article className="tour">
           <div className='img-container'>
             <img src={img} alt="img"/>
             <span className="close-btn">
            <i class="fa fa-window-close" aria-hidden="true"></i>
             </span>
           </div>
           <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>info<span onClick={this.clickInfo}><i className="fas fa-caret-square-down"></i></span></h5>
            {this.state.showInfo &&  <p>{info}</p> }
           
           </div>
        </article>
    )
   }
}
export default Tour