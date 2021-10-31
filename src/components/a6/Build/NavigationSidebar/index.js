import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => { 
        return(
            <div className="row">
                <div className="list-group">
                    <a className="list-group-item" href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="list-group-item" href="/">
                      <i className="fas fa-home"></i> Home
                    </a>
                    <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
                        <i className="fas fa-hashtag"></i> Explore
                    </a>
                    <a className="list-group-item" href="/">
                        <i className="fas fa-bell"></i> Notifications
                    </a>
                    <a className="list-group-item" href="/">
                        <i className="fas fa-envelope"></i> Messages
                    </a>
                    <a className="list-group-item" href="/">
                        <i className="fas fa-bookmark"></i> Bookmarks
                    </a>
                    <a className="list-group-item" href="/">
                        <i className="fas fa-list-ul"></i> Lists
                    </a>
                    <a className="list-group-item" href="/">
                        <i className="fas fa-user"></i> Profile
                    </a>
                    <a className="list-group-item" href="/">
                        <i className="fas fa-ellipsis-h"></i> More
                    </a>
                </div>
                <div class="d-grid mt-2">
                    <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
            </div>
        );  
    }

export default NavigationSidebar
