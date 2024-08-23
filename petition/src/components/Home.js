import React, { useEffect, useState } from "react";
import "./Home.css"
import PetitionForm from "./PetitionForm";
import Signatures from "./Signatures";
import AlertMessage from "./AlertMessage";

export const MessageContext = React.createContext();

function Home() {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/api/index")
          .then((res) => res.json())
          .then((data) => setUser(data))
          .catch(console.error);
      }, []);
    return(
        <div className='container-fluid bg-light '>
            <img className="logo" src="/images/download.png" alt=""></img>
            <div className="d-flex flex-row">
                <div>
                    <div className="container bg-white border shadow-sm bg-white middle-box">
                        <h1 className="title">
                            Moving the 489 Lecture to the evening
                        </h1>
                        <div className="font">
                            Many people have signed this petition. Add your name now!
                        </div>
                        <div className="d-inline-flex profile-comments">
                            <img className= "profile" src="images/profile-icon-480x480-1.webp" alt=""></img>
                            <div className="title-prof">
                                The Office of the Governor
                            </div>
                            <div className="title-comments">
                                161 comments
                            </div>
                        </div>
                    </div>
                    <div className="container bg-white border shadow-sm p-3 bg-white middle-box">
                        <div className="d-inline-flex">
                            <img className="image" src="images/e8142d65ee88b33663deb97f95db7957.jpg" alt=""></img>
                            <div>
                                <div className="text">
                                    ***The Office of the Governor is the sponsor of this petition, but is NOT the group requesting donations of any kind. You are able to sign the petition without donating to ipetitions which is the platform hosting the petition. No donations to ipetitions is required. DO NOT DONATE.***
                                </div>
                                <div className="text2">
                                    Our students deserve more than just a lecture. They deserve an evening
                                </div>
                            </div>
                        </div>
                        <div className="font1">
                            lecture
                        </div>
                        <div className="body-text">
                            As a student and as your student, I want our className to have access to the best in educational services.
                        </div>
                        <div className="body-text">
                            Limiting ourselves to having className in the morning ensures we will all be tired.
                        </div>
                        <div className="body-text">
                            Expanding our vision to switch the lecture time to the evening SUPPORTS our classmates and faculty, DECREASES sleep that is lost, and IMPROVES the amount of sleep gained.
                        </div>
                        <div className="body-text">
                            This lecture time switch will include:
                        </div>
                        <div className="body-text">
                            <ul>
                                <li>Starting className at 5:00pm</li>
                            </ul>
                            <ul>
                                <li>Many sleep schedules being fixed</li>
                            </ul>
                            <ul>
                                <li>Happy Students</li>
                            </ul>
                            <ul>
                                <li>A happy Professor</li>
                            </ul>
                            <ul>
                                <li>A late end to the day</li>
                            </ul>
                            <ul>
                                <li>Sweet dreams about Web development</li>
                            </ul>
                        </div>
                        <div className="body-text">
                            Too many of our students have attended morning lectures. And htmlFor too long, we’ve accepted the status quo. We now have a unique opportunity to bring evening lectures here so that evening learning can start where it should–at WSU!
                        </div>
                        <div className="body-text">
                            Join us on this mission to change the lecture time htmlFor 489!
                        </div>
                        <div className="body-text">
                            For more information, click here.
                        </div>
                        <div className="body-text">
                            Your Student,
                        </div>
                        <div className="body-text">
                            David Navarro
                        </div>
                        <div className="body-text">
                            <div className="text3">
                                ***The Office of the Governor is the sponsor of this petition, but is NOT the group requesting donations of any kind. You are able to sign the petition without donating to ipetitions which is the platform hosting the petition. No donations to ipetitions is required. DO NOT DONATE.***
                            </div>
                        </div>
                    </div>
                    <div class="container bg-white border shadow-sm bg-white middle-box">
                        <h5 class="comments">
                            Comment
                        </h5>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user) => {
                                    return (
                                        <Signatures
                                            user={user}
                                            setUser={setUser}
                                            setKey={user.nameuser}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <PetitionForm setUser={setUser}/>
            </div>
        </div>
    )
}

export default Home
