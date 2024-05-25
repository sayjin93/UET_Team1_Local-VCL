import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "@/context/authContext";
import apiRequest from "@/lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "@/components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  //#region constants
  const navigate = useNavigate();
  //#endregion

  //#region context
  const { currentUser, updateUser } = useContext(AuthContext);
  //#endregion

  //#region state
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  //#endregion

  //#region functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar,
      });

      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  //#endregion

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button disabled={isLoading}>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "dwpqaqgww",
            uploadPreset: "UET_Team1_Local-VCL",
            // cropping: true,
            multiple: false,
            folder: "avatars",
            clientAllowedFormats: ["jpg", "jpeg", "png"],
            maxImageFileSize: 2000000,
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
