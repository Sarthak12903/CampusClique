import mongoose from "mongoose";


const defaultProfilePic="https://imgs.search.brave.com/F09pGxti9Zp8AhLyRRrgNIfE6cmyTUR3aeyqv7kLJ6E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVhL2Jk/Lzk4LzVhYmQ5ODU3/MzVhOGZkNGFkY2Iw/ZTc5NWRlNmExMDA1/LmpwZw"
const defaultProfileBg="https://imgs.search.brave.com/4qY1jBNmUMzCbs-u49MwDR_JDQGK7QxgqP63qxdsUCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcHJv/ZmlsZS1waWN0dXJl/LWJhY2tncm91bmQt/bDlsZXJ0aXB5MXlu/ZjU3di5qcGc"
const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true   // one profile per user
    },

    fullName: {
      type: String,
      required: true,
      trim: true
    },

    collegeName: {
      type: String,
      required: true,
      trim: true
    },

    bio: {
      type: String,
      maxlength: 300
    },

    location: {
      city: {
        type: String,
        trim: true
      },
      state: {
        type: String,
        trim: true
      },
      country: {
        type: String,
        trim: true
      }
    },

    linkedinUrl: {
      type: String,
      trim: true
    },

    githubUrl: {
      type: String,
      trim: true
    },

    profilePhoto: {
      type: String,   // store image URL or file path
      set: (v) => !v ? defaultProfilePic : v

    },

    profileBackground: {
      type: String,   // store image URL or file path
      set:(v)=>v==="" ? defaultProfileBg:v
    }
  },
  {
    timestamps: true
  }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;

