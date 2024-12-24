// import React from 'react';
// import './Education.css';
// import education_icon from '../../assets/education_icon.jpg'
// const Education = () => {
//   const educationDetails = [
//      {
//       institution: 'Pranveer Singh Institute of Technology',
//       qualification: 'Bachelor of Technology in Computer Science and Engineering',
//       year: '2021 - 2025',
//     },
//     {
//       institution: 'K.L.S.V.M. Inter College',
//       qualification: '12th Grade',
//       year: '2021',
//     },
//     {
//       institution: 'A.P.G.H.S.School',
//       qualification: '10th Grade',
//       year: '2019',
//     },
//     // Add more education details here if needed
//   ];

//   return (
//     <div id='services' className="education-container">
//       <div className="education_header">
//       <h2>Education</h2>
//       <img src={education_icon} alt="" />
//       </div>
//       <div className="timeline">
//         {educationDetails.map((item, index) => (
//           <div key={index} className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h3 className="institution">{item.institution}</h3>
//               <p className="qualification">{item.qualification}</p>
//               <p className="year">{item.year}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Education;
import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import education_icon from "../../assets/edu-icon-removebg-preview (1).png";

const Education = () => {
  const educationDetails = [
    {
      institution: "Pranveer Singh Institute of Technology",
      qualification:
        "Bachelor of Technology in Computer Science and Engineering",
      year: "2021 - 2025",
    },
    {
      institution: "K.L.S.V.M. Inter College",
      qualification: "12th Grade(Science)",
      year: "2020-2021",
    },
    {
      institution: "A.P.G.H.S.School",
      qualification: "10th Grade(Science)",
      year: "2018-2019",
    },
    // Add more education details here if needed
  ];

  return (
    <div id="education" className="education-container">
      <div className="education_header">
        <h2>Education</h2>

        <img src={theme_pattern} alt="" />
      </div>
      <div className="timeline">
        {educationDetails.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="institution">{item.institution}</h3>
              <p className="qualification">{item.qualification}</p>
              <p className="year">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
