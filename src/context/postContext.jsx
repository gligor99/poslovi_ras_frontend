import React, { useState, useEffect } from "react";
import axios from "axios";

const PostContext = React.createContext();

const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      await axios
        .get("http://ras_poslovi_backend.test/app/post")
        .then((response) => {
          setAllPosts(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ allPosts, setAllPosts, fetchAllPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
