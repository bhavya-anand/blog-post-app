import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from '../actions/articleActions';

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    const { error, loading, articles } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {articles.map(article =>
          <li key={article.userId}>{article.id}>{article.title}{article.body}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(ArticleList);