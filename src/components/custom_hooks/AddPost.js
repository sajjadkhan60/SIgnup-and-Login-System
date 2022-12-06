import React, { useState } from "react";
import CustomButton from "../custom_button/custom_button.component";
import { motion } from "framer-motion";
function AddPost({ togglePopup, userId, posts, setPosts, setPostsLength }) {
  const [uploadStatus, setUploadStatus] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  function addPost() {
    if (file && description != "") {
      setError("");
      setUploadStatus(true);
      setTimeout(() => {
        let data = new FormData();
        const image = file;
        data.append("userId", userId);
        data.append("description", description);
        data.append("postImage", image);

        fetch("http://localhost/firegram/add_post.php", {
          method: "POST",
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.insert == "success") {
              var b;
              togglePopup((b = "close"));
              let newPost = {
                date: data.date,
                post_description: description,
                post_id: " ",
                post_image: data.imgUrl,
                user_id: userId,
              };
              if (posts.length == 0) {
                posts.push(newPost);
                setPosts(posts);
                setPostsLength(false);
              } else {
                posts.unshift(newPost);
                setPosts(posts);
              }
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, 2500);
    } else {
      setError("Description and image should be added to the post!");
    }
  }

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(file);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  return (
    <div>
      <div className="popup">
        <motion.div className="overlay">
          <motion.div
            className="form"
            initial={{ y: "20vh" }}
            animate={{ y: 0 }}
          >
            <div className="header">
              <h3>Add Post</h3>
              <div className="close" onClick={togglePopup}>
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </div>

            <div className="description">
              <textarea
                placeholder="Write description ..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            {file ? (
              <div className="uploaded-img">
                <img
                  src={URL.createObjectURL(file)}
                  style={{
                    width: "100%",
                    padding: "0px",
                    borderRadius: "10px",
                  }}
                />
                <label for="upload-photo">
                  <div
                    className="fileselect"
                    style={{
                      textAlign: "center",
                      border: "1px dashed black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div>Click Here To Change Picture</div>
                  </div>
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="fileselection">
                <label for="upload-photo">
                  <div className="fileselect">
                    <div>Click To Select A Picture</div>
                  </div>
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  onChange={handleChange}
                />
              </div>
            )}

            {error && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  paddingLeft: "2px",
                  paddingTop: "14px",
                }}
              >
                {error}
              </div>
            )}

            {uploadStatus ? (
              <CustomButton
                name={"Adding Post ..."}
                className={"disabled"}
                style={{
                  marginTop: "15px",
                  borderRadius: "8px",

                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              />
            ) : (
              <CustomButton
                name={"Add Post"}
                className={"custom_button"}
                onClick={addPost}
                style={{
                  marginTop: "20px",
                  borderRadius: "8px",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              />
            )}
            {file && <div file={file} />}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AddPost;
