import { THNData } from "@/utils/types";
import { useState } from "react";

export const RenderComment = ({ comment }: { comment: THNData }) => {
  const [expand, setExpand] = useState(false);

  const toggleComment = () => {
    setExpand((prev) => !prev);
  };

  const hasChildren = comment.children && comment.children.length > 0;

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-1 border border-slate-400 rounded p-2">
        <h5 className="flex gap-1 items-start">
          <span
            dangerouslySetInnerHTML={{
              __html: comment.text,
            }}
          />
          {hasChildren && (
            <button
              onClick={toggleComment}
              className="ml-auto p-2 bg-slate-300 rounded-[50%] w-[26px] h-[26px] flex justify-center items-center"
              title={expand ? "collapse" : "expand"}
            >
              {expand ? "-" : "+"}
            </button>
          )}
        </h5>
        <h6 className="text-md font-semibold italic">
          <span className="font-normal">By </span>
          {comment.author}
        </h6>

        {expand && hasChildren && (
          <div className="border-t border-t-slate-300 py-4">
            <h6 className="font-semibold text-md">Replies: </h6>
            {comment.children.map((child) => (
              <div key={comment.id} className="pl-4">
                <RenderComment comment={child} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
