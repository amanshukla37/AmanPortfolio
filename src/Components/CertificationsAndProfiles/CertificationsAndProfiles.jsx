import React from "react";
import "./CertificationsAndProfiles.css";
import leetcode_icon from "../../assets/LeetCode_logo.png";
import linkedin_icon from "../../assets/linked_icon.png";
import codechef_icon from "../../assets/codechef-icon.png";
import github_icon from "../../assets/github-icon.png";
import hackerrank_icon from "../../assets/hack-icon.png";
import gfg_icon from "../../assets/gfg_icon.png";

const CertificationsAndProfiles = () => {
  const certificates = [
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1ZOK86_anvjB8v6ku1KNlcc28Tf-Ujn1L/view?usp=sharing",
    },
    {
      title: "C++ Programming",
      issuer: "freeCodeCamp",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1BTfwOI67Ld-N6QLpy_DGtHU_guT4LeYK/view?usp=sharing",
    },
    {
      title: "Structured Query Language",
      issuer: "Udemy",
      date: "January 2024",
      link: "https://drive.google.com/file/d/1TbHdyfxF4Ze_jeMptkwgNYqzq9Ot8R54/view?usp=sharing",
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "SEP 2022",
      link: "https://www.hackerrank.com/certificates/27f86cf378b3",
    },
  ];

  const profiles = [
    {
      platform: "LinkedIn",
      icon: linkedin_icon,
      link: "https://www.linkedin.com/in/aman-shukla-7290aa232/",
    },
    {
      platform: "CODECHEF",
      icon: codechef_icon,
      link: "https://www.codechef.com/users/system37",
    },
    {
      platform: "GitHub",
      icon: github_icon,
      link: "https://github.com/amanshukla37",
    },
    {
      platform: "LeetCode",
      icon: leetcode_icon,
      link: "https://leetcode.com/u/Aman_Shukla2004/",
    },
    {
      platform: "HackerRank",
      icon: hackerrank_icon,
      link: "https://www.hackerrank.com/profile/aman_30667",
    },
    {
      platform: "GFG",
      icon: gfg_icon,
      link: "https://www.geeksforgeeks.org/user/shuklaa44d9/",
    },
  ];

  return (
    <div id="contact_social" className="certifications-profiles-section">
      <h2 className="section-title">Certifications & Developer Profiles</h2>
      <div className="content-wrapper">
        {/* Certifications Section */}
        <div className="certifications-column">
          <h3 className="section-subtitle">Certifications</h3>
          <div className="certifications-container">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">Issued by: {cert.issuer}</p>
                <p className="certificate-date">Date: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Profiles Section */}
        <div className="profiles-column">
          <h3 className="section-subtitle2">Developer Profiles</h3>
          <div className="profiles-container">
            {profiles.map((profile, index) => (
              <div key={index} className="profile-card">
                <div className="profile-content">
                  <h3 className="profile-platform">
                    <img src={profile.icon} alt="" className="profile-icon" />
                    {profile.platform}
                  </h3>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-profile"
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsAndProfiles;
