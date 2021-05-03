import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";
import {useSelector} from "react-redux";

export function AddUser() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [nickname, setName] = useState("");
    const [real_name, setRealName] = useState("");
    const [origin_description, setOriginDescription] = useState("");
    const [superpowers, setSuperpower] = useState("");
    const [catch_phrase, setCatchPhrase] = useState("");
    const [error, setError] = useState(null);


    const handleNickname = (e) => setName(e.target.value);
    const handleRealName = (e) => setRealName(e.target.value);
    const handleOriginDescription = (e) => setOriginDescription(e.target.value);
    const handleSuperpowers = (e) => setSuperpower(e.target.value);
    const handleCatchPhrase = (e) => setCatchPhrase(e.target.value);

    const usersAmount = useSelector((state) => state.users.length);
    const handleClick = () => {
        if (nickname && real_name && origin_description && superpowers && catch_phrase ) {
            dispatch(
                userAdded({
                    id: usersAmount + 1,
                    nickname,
                    real_name,
                    origin_description,
                    superpowers,
                    catch_phrase
                })
            );

            setError(null);
            history.push("/");
        } else {
            setError("Fill in all fields");
        }
        setName("");
        setRealName("");
        setOriginDescription("");
        setSuperpower("");
        setCatchPhrase("");

    };

    return (
        <div className="container">
            <div className="row">
                <h1>Add user</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <label for="nameInput">Nickname</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="Nickname"
                        id="nameInput"
                        onChange={handleNickname}
                        value={nickname}
                    />
                    <label htmlFor="nameInput">Real name</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="Real name"
                        id="nameInput"
                        onChange={handleRealName}
                        value={real_name}
                    />
                    <label htmlFor="nameInput">Origin description</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="Origin description"
                        id="nameInput"
                        onChange={handleOriginDescription}
                        value={origin_description}
                    />
                    <label htmlFor="nameInput">Superpowers</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="Superpowers"
                        id="nameInput"
                        onChange={handleSuperpowers}
                        value={superpowers}
                    />
                    <label htmlFor="nameInput">Catch Phrase</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="Catch Phrase"
                        id="nameInput"
                        onChange={handleCatchPhrase}
                        value={catch_phrase}
                    />
                    {error && error}
                    <button onClick={handleClick} className="button-primary">
                        Add user
                    </button>
                </div>
            </div>
        </div>
    );
}