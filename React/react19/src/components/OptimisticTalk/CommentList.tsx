interface CommentListProps {
  comments: string[];
}

const CommentList = ({ comments }: CommentListProps) => {
  if (comments.length === 0) {
    return <p className="mt-4 text-gray-500">아직 댓글이 없습니다.</p>;
  }

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded shadow-sm"
          >
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
