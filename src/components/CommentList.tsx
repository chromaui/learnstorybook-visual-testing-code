
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
  
  /**
  * The Commentlist component should display the comments from the users.
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
      <div>
        {comments.length} of {totalCount}
      </div>
    );
  }
  