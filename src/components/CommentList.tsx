import styled, { createGlobalStyle } from "styled-components";

interface Author {
  name: string;
  avatar: string;
}

interface Comment {
  text: string;
  author: Author;
}

export interface CommentListProps {
  /**
   * Is the component in the loading state
   */
  loading?: boolean;

  /**
   * Total number of comments
   */
  totalCount?: number;

  /**
   * List of comments
   */
  comments?: Comment[];
}

const CommentListWrapper = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  display: inline-block;
  vertical-align: top;
  width: 265px;
`;

const CommentItem = styled.div`
  font-size: 12px;
  line-height: 14px;
  clear: both;
  height: 48px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px 0;
  background: linear-gradient(
    120deg,
    rgba(248, 248, 254, 0.95),
    rgba(250, 250, 250, 0.95)
  );
  border-radius: 48px;
`;

const Avatar = styled.div`
  float: left;
  position: relative;
  overflow: hidden;
  height: 48px;
  width: 48px;
  margin-right: 14px;
  background: #dfecf2;
  border-radius: 48px;
`;

const AvatarImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background: #999;
`;

const Message = styled.div`
  overflow: hidden;
  padding-top: 10px;
  padding-right: 20px;
`;

const Author = styled.span`
  font-weight: bold;
`;

const CommentText = styled.span``;

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,800');
 `;

/**
 * The Commentlist component should display the comments from the user.
 */
export default function CommentList({
  loading = false,
  comments = [],
  totalCount = 10,
}: CommentListProps) {
  if (loading) {
    return <div>loading</div>;
  }
  if (comments.length === 0) {
    return <div>empty</div>;
  }
  return (
    <>
      <GlobalStyle />
      <CommentListWrapper>
        {comments.map(({ text, author: { name, avatar } }) => (
          <CommentItem key={`comment_${name}`}>
            <Avatar>
              <AvatarImg src={avatar} />
            </Avatar>
            <Message>
              <Author>{name}</Author> <CommentText>{text}</CommentText>
            </Message>
          </CommentItem>
        ))}
      </CommentListWrapper>
    </>
  );
}
