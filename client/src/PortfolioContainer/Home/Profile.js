import React from "react";
import Typical from 'react-typical'

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
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={{
                                    "Passionate Developer",
                                    1000,
                                    "Software Dev",
                                    1000,
                                    "Frontend Engineer",
                                    1000,
                                    "AI Writer",
                                    1000,
                                    "Informant",
                                    1000,
                                }}
                                />
                            </h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}