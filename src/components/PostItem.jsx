import Avatar from "./Avatar";
import {
  CloseIcon,
  CommentIcon,
  LikeIcon,
  ShareIcon,
  ThreeDotIcon,
} from "../icons";
import usePostStore from "../stores/postStore";
import { toast } from "react-toastify";
import useUserStore from "../stores/userStore";

function PostItem(props) {
  const { post } = props;
  const user = useUserStore((state) => state.user);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);
  const deletePost = usePostStore((state) => state.deletePost);
  const createLike = usePostStore((state) => state.createLike);
  const unLike = usePostStore((state) => state.unLike);

  const haveLike = post.likes.some((el) => el.userId === user.id);

  const hdlLikeClick = async () => {
    if (haveLike) {
      await unLike(post.id);
    } else {
      await createLike(post.id);
    }
  };

  const hdlDelete = async () => {
    try {
      const resp = await deletePost(post.id);
      toast.success(resp.data.message);
    } catch (err) {
      const errMsg = err.response?.data.message || err.message;
      toast.error(errMsg);
    }
  };

  const hdlUpdate = async () => {
    setCurrentPost(post);
    document.getElementById("editform-modal").showModal();
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar
              className="w-11 h-11 rounded-full"
              imgSrc={post.user.profileImage}
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm">{post.user.firstName}</p>
              <p className="text-xs opacity-70">1d ago</p>
            </div>
          </div>
          <div className="flex gap-2">
            {user.id === post.userId && (
              <div className="dropdown">
                <div tabIndex={0} role="button">
                  <div className="avatar items-center cursor-pointer">
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                      <ThreeDotIcon className="w-6" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
                >
                  <li onClick={hdlUpdate}>
                    <a>Edit</a>
                  </li>
                  <li onClick={hdlDelete}>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            )}
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        <p>{post.message}</p>
        {post.image && (
          <img
            src={post.image}
            alt="post image"
            className="p-4 max-h-400 object-contain"
          />
        )}

        {/* like , comment */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end cursor-pointer gap-1">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className="w-5" />
            </div>
            <p>{post.likes.length} likes</p>
          </div>
          <div className="flex ">
            <p className="opacity-60">{post.comments.length}comments</p>
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* 3 button */}
        <div className="flex gap-3 justify-between">
         	<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1"
						onClick={hdlLikeClick}
					>
						{haveLike && <LikeIcon className='w-10 outline-primary outline-1 rounded outline-offset-2' />}
						{!haveLike && <LikeIcon className='w-6' />}
					</div>
          <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
            <CommentIcon className="w-8" /> Comment
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
            <ShareIcon className="w-6" /> Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* <CommentContainer postId={post.id} comments={post.comments} /> */}
      </div>
    </div>
  );
}

export default PostItem;
