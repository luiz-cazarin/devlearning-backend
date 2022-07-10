import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    author: {},
    course: {},
    createdAt: {
        type: Date,
        default: new Date(),
    },
    likes: {
        type: [String],
        default: [],
    },
});

const CommentsModal = mongoose.model("Comment", commentSchema);
export default CommentsModal;