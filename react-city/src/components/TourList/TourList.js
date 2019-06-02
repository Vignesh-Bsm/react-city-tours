import React from 'react'
import "./TourList.scss"
import Tour from '../Tour/Tour'
import {tourData} from '../tourData'
class TourList extends React.Component{
   constructor(){
       super()
       this.state={
           tours:tourData
       }
   }

    render(){
        const {tours}=this.state;
        return(
           <section className="tourList">
               {tours.map((tour)=>{
                   return(
                       <Tour key={tour.id} tour={tour} />
                   )
               })}
           </section>
        )
    }
}
export default TourList