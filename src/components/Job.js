import React, { useEffect,useState } from 'react'
import CardJobs from './CardJobs'
import './Job.css'
import axios from 'axios'
import NavigationBar from './NavigationBar'
const Job = () => {
  
    const [arr, setarr] = useState([])

    axios.get("http://localhost:5000/jobs/find").then((res)=>{setarr(res.data)})
    const temp = arr.map((job) => (<CardJobs tittle = {job.position} summary ={job.summary} link = {job.link}/>) )

    // const [val, setval] = useState('red')

    // const clicked = ()=>
    // {
    //     setval('blue')
    // }

    return (
        <>
           <div className="head"> <h1 style={{textAlign:'center',color:'white',paddingTop:'20px'}}>The Job Portal</h1> </div>

           <div style ={{paddingTop:'50px', paddingLeft:'35%'}}>
                <CardJobs tittle = 'Software Engineer' imageSource="data:image/png;base64,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" summary='Looking for Software Engineering Intern at Amazon with one year experience'/>
                <CardJobs tittle = 'Technology Intern' imageSource="data:image/png;base64,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" summary='Looking for Technology Intern at Microsoft with knowledge of C++,Java and Data Structures.'/>
                {temp}
            
            </div>

            <button  className="btn btn-danger" > Add</button>

        </>
    )
}

export default Job
