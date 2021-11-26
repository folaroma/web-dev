import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = () => { 
        return(
            <div className="row">
                <div className="list-group">
                    <Link to="/a7" className="list-group-item">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/a7/twitter/home" className="list-group-item active">
                        <i className="fas fa-home"></i>
                        <span className="d-none d-xl-inline ms-1">Home</span>
                    </Link>
                    <Link to="/a7/twitter/explore" className="list-group-item">
                        <i className="fas fa-hashtag"></i>
                        <span className="d-none d-xl-inline ms-1">Explore</span>
                    </Link>
                    <Link to="/a7/twitter/notifications" className="list-group-item">
                        <i className="fas fa-bell"></i>
                        <span className="d-none d-xl-inline ms-1">Notifications</span>
                    </Link>
                    <Link to="/a7/twitter/messages" className="list-group-item">
                        <i className="fas fa-envelope"></i>
                        <span className="d-none d-xl-inline ms-1">Messages</span>
                    </Link>
                    <Link to="/a7/twitter/bookmarks" className="list-group-item">
                        <i className="fa fa-bookmark"></i>
                        <span className="d-none d-xl-inline ms-1">Bookmarks</span>
                    </Link>
                    <Link to="/a7/twitter/lists" className="list-group-item">
                        <i className="fas fa-list-ul"></i>
                        <span className="d-none d-xl-inline ms-1">Lists</span>
                    </Link>
                    <Link to="/a7/twitter/profile" className="list-group-item">
                        <i className="fas fa-user"></i>
                        <span className="d-none d-xl-inline ms-1">Profile</span>
                    </Link>
                    <Link to="/a7/twitter/more" className="list-group-item">
                        <i className="fas fa-ellipsis-h"></i>
                        <span className="d-none d-xl-inline ms-1">More</span>
                    </Link>
                </div>
                <div class="d-grid mt-2">
                    <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
            </div>
        );  
    }

export default NavigationSidebar
