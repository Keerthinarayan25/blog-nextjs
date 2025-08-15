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
  authorId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }


}, {timestamps: true});
const BlogPost = mongoose.models.Post || mongoose.model('BlogPost', postSchema);
export default BlogPost; 