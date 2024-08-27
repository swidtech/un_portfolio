import React from 'react';

export default function Profile() {
    return (
        <div className="profile-container" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="#">
                            <i className="fa fa-facebook-square"></i>                        
                        </a>
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>                        
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram"></i>                        
                        </a>
                        <a href="#">
                            <i className="fa fa-youtube-square"></i>                        
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>                        
                        </a>
                    </div>
                
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                        Hey I'm <span className="highlighted-text">Sidiq</span>                    
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className="primary-text">
                            {" "}
                            <h1>
                                
                            </h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}