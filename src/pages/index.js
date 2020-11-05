import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import classes from "./index.module.less";

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <div className={classes.header}>
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
  </Layout>
);

export default IndexPage;
