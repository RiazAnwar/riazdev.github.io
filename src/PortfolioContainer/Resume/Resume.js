import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import index from "react-typical";

export default function Resume(props){
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
        
          //here we have
          const programmingSkillsDetails = [
            { skill: "JavaScript", ratingPercentage: 80 },
            { skill: "React JS", ratingPercentage: 80 },
            { skill: "Databases", ratingPercentage: 70 },
            { skill: "Data Structure", ratingPercentage: 80 },
            { skill: "Node JS", ratingPercentage: 90 },
            { skill: "HTML", ratingPercentage: 95 },
            { skill: "Bootstrap", ratingPercentage: 80 },
            { skill: "CSS", ratingPercentage: 80 },
          ];
        
          const projectsDetails = [
            {
              title: "Personal Portfolio Website",
              duration: { fromDate: "2020", toDate: "2021" },
              description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
              subHeading: "Technologies Used: React JS, Javascript, HTML, CSS",
            },
            {
              title: "Ecommerce Website ",
              duration: { fromDate: "2020", toDate: "2021" },
              description:
                "Online ecommerce website for showcasing and selling products onlne with payment system integration",
              subHeading:
                "Technologies Used: HTML, CSS, Node js, Bootstrap.",
            },
          ];
        //Education Details
          const resumeDetails = [
            <div className="resume-screen-container" key="education">
              <ResumeHeading
                heading={"University of Gujrat"}
                subHeading={"BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING"}
                fromDate={"2015"}
                toDate={"2019"}
              />
        
              <ResumeHeading
                heading={"Iqra College"}
                subHeading={"FSc Pre-Engineering"}
                fromDate={"2013"}
                toDate={"2015"}
              />
              <ResumeHeading
                heading={"Iqra School"}
                subHeading={"Elementary and HighSchool"}
                fromDate={"2011"}
                toDate={"2013"}
              />
            </div>,
        
            /* WORK EXPERIENCE */
            <div className="resume-screen-container" key="work-experience">
              <div className="experience-container">
                <ResumeHeading
                  heading={"Freelance"}
                  subHeading={"MERN DEVELOPER"}
                  fromDate={"2021"}
                  toDate={"2022"}
                />
                <div className="experience-description">
                  <span className="resume-description-text">
                    Work as a Front-end and Back-end programmer
                  </span>
                </div>
              </div>
            </div>,
        
            /* PROGRAMMING SKILLS */
            <div
              className="resume-screen-container programming-skills-container"
              key="programming-skills"
            >
              {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                  <div className="heading-bullet"></div>
                  <span>{skill.skill}</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: skill.ratingPercentage + "%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>,
        
            /* PROJECTS */
            <div className="resume-screen-container" key="projects">
              {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                  key={index}
                  heading={projectsDetails.title}
                  subHeading={projectsDetails.subHeading}
                  description={projectsDetails.description}
                  fromDate={projectsDetails.duration.fromDate}
                  toDate={projectsDetails.duration.toDate}
                />
              ))}
            </div>,
        
            /* Interests */
            <div className="resume-screen-container" key="interests">
              <ResumeHeading
                heading="Teaching"
                description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
              />
              <ResumeHeading
                description="I love the gym because it provides a great environment to stay motivated and get a good workout. I have found that by mixing up my routine and trying new things, I stay interested in my workouts and see better results."
                heading="GYM"
              />
              <ResumeHeading
                heading="Competitive Gaming"
                description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
              />
            </div>,
          ];
        
          const handleCarousal = (index) => {
            let offsetHeight = 360;
        
            let newCarousalOffset = {
              style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
            };
        
            setCarousalOffsetStyle(newCarousalOffset);
            setSelectedBulletIndex(index);
          };
          const getBullets = () => {
            return resumeBullets.map((bullet, index) => (
              <div
                onClick={() => handleCarousal(index)}
                className={
                  index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
              >
                <img className="bullet-logo"src={require(`../../assets/Resume/${bullet.logoSrc}`).default} alt=""/>
                <span className="bullet-label">{bullet.label}</span>
              </div>
            ));
          };
          const getResumeScreens = () => {
            return (
              <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
              >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
              </div>
            );
          };
    return(
      <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume💼"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
