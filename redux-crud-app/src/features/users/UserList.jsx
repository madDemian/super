import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {userDeleted} from "./usersSlice";

export function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const handleDelete = (id) => {
        dispatch(userDeleted({ id }));
    };
    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD User app</h1>
            </div>
            <div className="row">
                <div className="two columns">
                    <button className="button-primary">Load users</button>
                </div>
                <div className="two columns">
                    <button className="button-primary">Add user</button>
                </div>
            </div>
            <div className="row">
                <table class="u-full-width">
                    <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Real name</th>
                        <th>Origin Description</th>
                        <th>Superpowers</th>
                        <th>Catch phrase</th>
                        <th>IMG</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({id, nickname, real_name, origin_description, superpowers, catch_phrase, img}, i) => (
                        <tr key={i}>
                            <td>{nickname}</td>
                            <td>{real_name}</td>
                            <td>{origin_description}</td>
                            <td>{superpowers}</td>
                            <td>{catch_phrase}</td>
                            <td>{img}</td>
                            <td>
                                <button onClick={() => handleDelete(id)}>Delete</button>                                <Link to={`/edit-user/${id}`}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}