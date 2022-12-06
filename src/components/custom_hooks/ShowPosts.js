import React from "react";
import SinglePost from "./SinglePost";
import { motion } from "framer-motion";
function ShowPosts({ posts }) {
  return (
    <div>
      <motion.div
        className="all-posts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ transition: 3 }}
      >
        {posts.map((ele) => {
          return <SinglePost ele={ele} />;
        })}
      </motion.div>
    </div>
  );
}

export default ShowPosts;
