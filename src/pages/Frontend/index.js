import React from 'react';

export default function Frontend() {

    let currentUser = JSON.parse(localStorage.getItem("rememberedUser"))

    // let name = fullName.charAt(0).toUpperCase().slice(1)
    let fullName = currentUser && currentUser.fullName ? currentUser.fullName : "User";
  
    console.log(fullName);

  return (
    <main>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Welcome {fullName}</h1>
            </div>
        </div>
    </div>
    </main>

  )
}
