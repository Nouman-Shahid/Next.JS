import { connectionToDatabase } from "./connection";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectionToDatabase();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};
export const getPost = async (slug) => {
  try {
    connectionToDatabase();
    const post = await Post.find({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch post");
  }
};
export const getUser = async (id) => {
  try {
    connectionToDatabase();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user");
  }
};
export const getUsers = async () => {
  try {
    connectionToDatabase();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
};
