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
          tutorials, & videos here covering Web Development, Machine Learning,
          Drones, and anything else that peeks my interest.
        </p>
      </div>
    </div>
    <h1 className={classes.section_titles}>Projects</h1>
    <h2 className={classes.sub_section_titles}>Object Detection Drone</h2>
    <DroneImage />
    <p className={classes.section_summaries}>
      Here's an object detection drone I built using the Navio2, Python, and
      APMPlanner2.
    </p>
  </Layout>
);

export default IndexPage;
