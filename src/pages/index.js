import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import DroneImage from "../components/drone-image";
import SEO from "../components/seo";
import classes from "./index.module.less";

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <div className={classes.about_me_header}>
      <h2>About Me</h2>
    </div>
    <div className={classes.profile_pic_and_about_me}>
      <Image />
      <div className={classes.about_me}>
        <p>
          Hey everyone! Welcome to Jay@Machine. I'm Jay. You'll find posts,
          tutorials, & videos here covering Web Development, Machine Learning,
          Drones, and anything else that peeks my interest.
        </p>
      </div>
    </div>
    <div className={classes.projects_header}>
      <h2>Projects</h2>
    </div>
    <h3 className={classes.project_titles}>Object Detection Drone</h3>
    <div className={classes.projects}>
      <DroneImage />
    </div>
    <div className={classes.drone_project}>
      <p>
        Here's a drone I built & calibrated using the Navio2, Python, and
        APMPlanner2. It's capable of streaming video using ImageZMQ, and
        detecting people using OpenCV's deep learning models.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
