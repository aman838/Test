import React ,{useEffect,useState} from 'react'

function Attendence() {
    const [state,setState]=useState([])
    useEffect(() => {
        var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://34.198.81.140/attendance.json',
  headers: { }
};

axios(config)
.then(function (response) {
   console.log(response.data);
   setState(response.data)
    var company_sal = 0;
    var Employee_array=[];
response.data.map((data)=>{
           if(!checkEmployee(Employee_array,data.emp_id)){
               Employee_array.push(data)
              const m=  response.data.filter((o)=>o.emp_id==data.emp_id )
               if(data.gender=="Male"){
                    getSalaryOfMale(m)
               }else{
                  getSalaryOfFemale(m)
               }
           }    
    })
   
//  console.log(Employee_array)
})
.catch(function (error) {
  console.log(error);
});
       
    }, [])

    const checkEmployee =(array,empId)=>{
         var m= array.find(o=>{
             if(o.emp_id==empId){
                 return true
             }else{
                 return false
             }
            
            })

            return m
    }


    const getSalaryOfMale=(array)=>{
        array.map((data)=>{
            if(data.designation=="Workers"){

            }else{
                const month = data.date.split(" ") 
                if(month[0]=="Feb" && month[2]=="2020"){
                    
                }
            }
        })
        
    }
    
    const getSalaryOfFemale=(array)=>{
        console.log(array)
    }

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default Attendence
