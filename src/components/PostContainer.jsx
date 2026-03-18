import { useEffect } from "react";
import usePostStore from "../stores/postStore";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import { CloseIcon } from "../icons";
import PostFormEdit from "./PostFormEdit";

function PostContainer() {
  const getAllPosts = usePostStore(state => state.getAllPosts);
  const posts = usePostStore(state=> state.posts);
  const setCurrentPost = usePostStore(state=> state.setCurrentPost);
  const currentPost = usePostStore(state=> state.currentPost);
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="w-170 mx-auto min-h-screen my-3 flex-col gap-4 rounded-lg ">
        <CreatePost />
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      </div>
      <dialog
        className="modal"
        id="editform-modal"
        onClose={() => setCurrentPost(null)}
      >
        <div className="modal-box ">
          {currentPost && <PostFormEdit />}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <CloseIcon />
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default PostContainer;
