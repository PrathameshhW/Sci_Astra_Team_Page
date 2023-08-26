import React from "react";
import "./University.css";

const University = () => {
  const university = [
    { name: "Cambridge University", url: "https://www.cam.ac.uk/" },
    { name: "Harvard University", url: "https://www.harvard.edu/" },
    {
      name: "University of California",
      url: "https://www.universityofcalifornia.edu/",
    },
    { name: "ETH Zurich University", url: "https://ethz.ch/en.html" },
    { name: "Max Planck University", url: "https://www.mpg.de/institutes" },
    { name: "University of Edinburgh", url: "https://www.ed.ac.uk/" },
    { name: "Johns Hopkins University", url: "https://www.jhu.edu/" },
    { name: "Midrigone State", url: "" },
    { name: "University of Illinois", url: "https://illinois.edu/" },
    { name: "Humboldt University Berlin", url: "https://www.hu-berlin.de/en" },
  ];
  return (
    <section className="t-wrapper">
      <div className="flexColStart innerWidth paddings t-container">
        <div className="flexColStart headings">
          <span className=" gradientText primaryHeading">Our Team</span>
          <span className="primaryText ">
            Learn from Scientists, <br />
            reasearch scholars from the top institues in the world
          </span>
        </div>
        <div className="university" style={{ marginTop: "4rem" }}>
          {university.map((item, index) => {
            return (
              <div className="flexCenter  paddings card" key={index}>
                <span className="secondaryText u-name">
                  <a href={item.url} target="_blank">
                    {item.name}
                  </a>
                </span>
              </div>
            );
          })}
          <span className="flexStart gradientText primaryText">
            ... and so on
          </span>
        </div>
      </div>
    </section>
  );
};

export default University;
