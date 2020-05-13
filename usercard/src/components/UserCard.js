import React from "react";
import '../App.css'
import FollowersCard from "./FollowersCard";

const UserCard = props => {

    return (
        <div>
            <div className="App-header" style={{ backgroundImage: `url(${props.user.avatar_url})`}}>
                <h2>{props.user.name}</h2>
                <p><strong>Username:</strong> {props.user.login}</p>
            </div>
            <h2>{props.user.name}'s Followers</h2>
            <FollowersCard />
        </div>
    )
}

export default UserCard;