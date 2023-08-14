import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  const getUsers =async() =>{
    try{
        setLoading(false)
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      setUsers(await response.json());
    }catch(error){
      console.log("my error is"+error);
    }
   
  }

  useEffect(()=>{
    getUsers()
  },[]);

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <>
    <h2>List of GitHub Users</h2>
    <div className="container-fluid mt-5">
      <div className="row  text-center">
        {
          users.map((curElem)=>{
            return (
              <>
               <div className="col-10 col-md-4  mt-5 " key={curElem.id}>
          <div className="card p-2">
            <div className="d-flex align-items-center">
              <div className="image"> <img src={curElem.thumbnailUrl} class="rounded" width="155"/> </div>
              <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0 textLeft">Thapa</h4> 
                <span className='textLeft'>{curElem.title}</span>
                <dev className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                  <div className="d-flex flex-column ">
                    <span class="articles">Articles</span>
                    <span class="number1">38</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span class="followers">Followers</span>
                    <span class="number2">38</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="rating">Rating</span>
                    <span className="number3">38</span>
                  </div>
                </dev>

              </div>

            </div>

          </div>

        </div>
              </>
            )

          })
        }
       

      </div>

    </div>
    </>
  )
}

export default UseEffectApi