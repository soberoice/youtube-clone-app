import { Box } from "@mui/material";
import React from "react";
import CommentCard from "./CommentCard";

export default function CommentContainer({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Box key={index}>
          <CommentCard comment={comment} />
        </Box>
      ))}
    </div>
  );
}
