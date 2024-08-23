import React, { useEffect, useState } from "react";

function Signatures(props) {

    const {user, setUser} = props;

    return(
        <tr>
            <th scope="row">{user.nameuser}</th>
            <td>{user.email}</td>
            <td>{user.comment}</td>
        </tr>
    )
}

export default Signatures