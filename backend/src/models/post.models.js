import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    // User who created the post
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Post text
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100, //char limit
    },

    // Optional image
    image: {
      type: String,
    },

    // Optional video
    video: {
      type: String,
    },

    // Post category
    category: {
      type: String,
      enum: [
        "general",
        "opportunity",
        "event",
        "coding",
        "sports",
        "academics",
        "announcement",
      ],
      default: "general",
    },

    // Likes
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Comments
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("Post", postSchema);
export default Post;
