import React, { useEffect, useState } from "react";
const host = 'http://localhost:3000';


const renderInfo = (data) => {
  return (
    <div className="my-3 w-3/4 flex-col flex gap-3">
      <h1 className="text-center underline underline-offset-8 decoration-themeDGreen decoration-4 decoration-dotted text-3xl font-semibold text-themeOrange">
        {data[0].heading}
      </h1>
      <p className="text-center">{data[0].desc}</p>
      <div className="info flex flex-wrap justify-center xl:justify-between items-center gap-3">
        {data.slice(1).map((item, index) => (
          <div
            key={index}
            className="rounded-3xl w-[300px] py-4 h-full bg-themeLGreen flex flex-col p-2 justify-evenly items-center"
          >
            <div className="flex w-full h-full justify-evenly items-center">
              <img src={item.image ? host + item.image : process.env.PUBLIC_URL + '/pic.jpeg'} className="rounded-full w-20 h-20 bg-themeWhite" alt='unavailable' />
              <div className="text-center flex-col flex justify-center">
                <h4 className="text-xl font-medium">{item.name}</h4>
                <h4 className="font-light">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const People = () => {
  const [selectedInfo, setSelectedInfo] = React.useState("Experts");
  const [data,setData] = useState([]);
  let expertData = [
    {
      heading: "Experts Panel",
      desc: "Comprising specialists in education and child development, our Experts Panel brings invaluable insights and guidance to tailor our tools to meet the unique needs of each child.",
    }
  ];
  let aiData = [
    {
      heading: "AI Team",
      desc: "Innovators at heart, our AI team harnesses the power of artificial intelligence to develop cutting-edge solutions that enhance learning experiences for children with dyslexia, ADHD, autism, and cerebral palsy.",
    }
  ];
  let devData = [
    {
      heading: "Development Team",
      desc: "The backbone of our operations, our Development Team ensures that our tools are robust, user-friendly, and accessible, bringing our vision to life with technical excellence.",
    }
  ];
  
  useEffect(()=>{

    let endPoint = '';
    switch(selectedInfo){
      case 'Experts': endPoint = 'experts'; break;
      case 'AI': endPoint = 'aiTeam'; break;
      default: endPoint = 'devTeam';
    }
    
    async function fetchMembers(){

      const mem = await fetch(`${host}/api/members/team/${endPoint}`);
      const res = await mem.json();
      
      if(res.status){
        switch(selectedInfo){
          case 'Experts': setData(expertData.concat(res.members)); break;
          case 'AI': setData(aiData.concat(res.members)); break;
          default: setData(devData.concat(res.members)); break; 
        }
        console.log("fetching done", res);
      }

    }
    
    fetchMembers();
//eslint-disable-next-line
  },[selectedInfo]);

  return (
    <div className="h-full flex flex-col gap-10 items-center pt-44 lg:pt-32">
      <h1 className="text-center text-5xl font-bold text-themeOrange">
        <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
          People
        </span>{" "}
        behind The Bridge of Hopes
      </h1>
      <p className="text-center w-2/3">
        At <span className="text-themeOrange font-bold">&quot;</span>
        <span className="text-themeDGreen font-medium">
          The Bridge of Hopes
        </span>
        ,<span className="text-themeOrange font-bold">&quot;</span> our
        dedicated members are passionately working together to support students
        with special needs. Our enthusiastic team is a harmonious blend of three
        essential pillars:
      </p>
      <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-2 mx-5">
        <div
          onClick={() => setSelectedInfo("Experts")}
          className={`flex justify-center items-center ${
            selectedInfo === "Experts" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Experts Panel
        </div>
        <div
          onClick={() => setSelectedInfo("AI")}
          className={`flex justify-center items-center ${
            selectedInfo === "AI" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          AI Team
        </div>
        <div
          onClick={() => setSelectedInfo("Development")}
          className={`flex justify-center items-center ${
            selectedInfo === "Development" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Development Team
        </div>
      </div>
      {data.length > 0 && renderInfo(data)}
    </div>
  );
};

export default People;
// import React from 'react'
// import {  Outlet, NavLink } from 'react-router-dom'

// function People() {

//   return (
//     <div className='container my-5'>
//       <h1>Our Team</h1>
//       <p>The dedicated members of NUCES-FAST Khi are working coperatively to help the students with special needs. Our enthusiast team can be categorized into three classes Experts Panel, AI team, and Development team</p>
//       <hr />
//       <h1 className='mt-7'>Meet our members</h1>

//       <div className='mt-3'>
//         <ul className="nav nav-tabs justify-content-center">
//           <li className="nav-item">
//             <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} aria-current="page" to="/people/experts" >Experts</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} to="/people/aiTeam" >AI team</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} to="/people/devTeam" >Development Team</NavLink>
//           </li>
//         </ul>
//         <Outlet/>
//       </div>

//     </div>
//   )
// }

// export default People
