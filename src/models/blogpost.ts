import mongoose  from 'mongoose';

const postSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  content:{
    type: String,
    required: true,
  },


}, {timestamps: true});
const BlogPost = mongoose.model('Post',postSchema);
export default BlogPost; 