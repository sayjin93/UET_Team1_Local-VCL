import "./profilePage.scss";

import { Suspense, useContext } from "react";
import { Link, useNavigate, useLoaderData, Await } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";

import CardSekelton from "@/components/card/CardSekelton";
import Chat from "@/components/chat/Chat";
import List from "@/components/list/List";
import Skeleton from "@/components/skeleton/Skeleton";

function ProfilePage() {
  //#region constants
  const navigate = useNavigate();
  const data = useLoaderData();
  //#endregion

  //#region contexts
  const { updateUser, currentUser } = useContext(AuthContext);
  //#endregion

  //#region functions
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await apiRequest.post("/auth/logout");

      updateUser(null);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  //#endregion

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<CardSekelton times={3} />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<CardSekelton />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense
            fallback={
              <div className="chat">
                <div className="messages">
                  <h1>Messages</h1>
                  <Skeleton
                    times={3}
                    style={{
                      height: "80px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            }
          >
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
