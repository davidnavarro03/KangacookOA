import React, { useState } from "react";
import "./PetitionForm.css"

function PetitionForm({ setUser}) {
    const [nameuser, setnameUser] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState(""); 

    async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("User: ", nameuser);
        const newUser = {
            nameuser,
            email,
            comment
        };
        postData("http://localhost:4000/api/index", newUser).then(() => {
            setUser((oldUser) => [...oldUser, newUser]);
        });
    }
    return(
        <div className="container right-box border shadow-sm">
            <div clasName="container form">
                <h4>Sign this Petition</h4>
                <form onSubmit={handleSubmit}>
                    <div id="liveAlertPlaceholder"></div>
                    <input 
                        required
                        type="text" 
                        id="nameuser" 
                        name="nameuser" 
                        placeholder="Name*"
                        onChange={(e) => {
                            setnameUser(e.target.value);
                        }}
                    />
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email*"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        />
                    <textarea 
                        className="form-control" 
                        id="comment" name="comment" 
                        rows="3" 
                        placeholder="Comments*"
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                    />
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PetitionForm