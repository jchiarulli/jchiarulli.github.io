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
    <h1 className={classes.section_titles}>About Me</h1>
    <div className={classes.profile_pic_and_about_me}>
      <div className={classes.profile_pic_wrapper}>
        <Image />
      </div>
      <div className={classes.about_me}>
        <p className={classes.section_summaries}>
          Hey everyone! Welcome to Jay@Machine. I'm Jay. You'll find posts,
          tutorials, and videos here covering Web Development, Machine Learning,
          Drones, and anything else that peeks my interest.
        </p>
      </div>
    </div>
    <h1 className={classes.section_titles}>Projects</h1>
    <div className={classes.project_one}>
      <div className={classes.about_project_one}>
        <h2 className={classes.sub_section_titles}>Object Detection Drone</h2>
        <p className={classes.section_summaries}>
          If you're interested in building an object detection drone using a
          Navio2, Raspberry Pi 3B, ArduPilot, Python, and OpenCV, then check out
          this project.
        </p>
      </div>
      <div className={classes.project_one_pic_wrapper}>
        <DroneImage />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
