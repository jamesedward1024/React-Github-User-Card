import React from "react";
import axios from "axios";

class FollowersCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    this.getFollowers();
  }
  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/jamesedward1024/followers`)
      .then(response => {
        this.setState({ followers: response.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        {this.state.followers.map(follower => {
          return (
            <div className="followers" key={follower.id}>
              <img className="cardImg" src={follower.avatar_url} />
              <p><strong>Username:</strong> {follower.login}</p>
                  <a href={follower.html_url}>Follow</a>
<hr/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FollowersCard;