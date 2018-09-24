import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from '../actions/articleActions';
import { fetchComments } from '../actions/commentActions';

class ArticleAndCommentsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArticles());
    this.props.dispatch(fetchComments());
  }

  render() {
    const { articlesError, articlesLoading, articles, comments, commentsError, commentsLoading } = this.props;

    if (articlesError) {
      return <div>Articles could not be loaded! {articlesError.message}</div>
    }

    if (commentsError) {
      return <div>Comments could not be loaded! {commentsError.message}</div>
    }

    if (articlesLoading) {
      return <div>Loading Articles...</div>;
    }

    if (commentsLoading) {
      return <div>Loading Comments...</div>;
    }

    return (
      <ul>{articles.map(article =>
        <div align="center">
          <div style={{ backgroundColor: 'lightGray' }}>
            {console.log(article)}
            <h3>{article.title}</h3>
            {article.body}
          </div>
          <br />
          <div>
            {
              comments.filter(function (comment) {
                return comment.postId === article.id;
              }).map(comment =>
                <div>
                  <span> {comment.body}</span>
                  <br />
                </div>
              )}
          </div>
        </div>
      )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.items,
  articlesLoading: state.articleReducer.loading,
  articlesError: state.articleReducer.error,

  comments: state.commentReducer.items,
  commentsLoading: state.commentReducer.loading,
  commentsError: state.commentReducer.error
});

export default connect(mapStateToProps)(ArticleAndCommentsList);