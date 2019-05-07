import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
// const StreamList = () => {
//   return <div> StreamList </div>;
// };

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    console.log(this.props.currentUserId);
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            {" "}
            Edit{" "}
          </Link>{" "}
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui button negative"
          >
            {" "}
            Delete{" "}
          </Link>{" "}
        </div>
      );
    }
  }

  renderedList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {" "}
          {this.renderAdmin(stream)}{" "}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {" "}
            {stream.title}{" "}
            <div className="description"> {stream.description} </div>{" "}
          </div>{" "}
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div
          style={{
            textAlign: "right"
          }}
        >
          <Link to="/streams/new" className="ui button primary">
            Create Stream{" "}
          </Link>{" "}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2> Streams </h2>
        <div className="ui celled list"> {this.renderedList()} </div>{" "}
        {this.renderCreate()}{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.isSignedIn ? state.auth.userId : null,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  {
    fetchStreams
  }
)(StreamList);
