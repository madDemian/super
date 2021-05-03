import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to\n" +
            "Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision,\n" +
            "solar invulnerability, flight...",
        catch_phrase: "“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
        img: "img"
    },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload);
        },
        userUpdated(state, action) {
            const { id, nickname,real_name, origin_description,superpowers,catch_phrase } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
                existingUser.nickname = nickname;
                existingUser.real_name = real_name;
                existingUser.origin_description = origin_description;
                existingUser.superpowers = superpowers;
                existingUser.catch_phrase = catch_phrase;

            }
        },
        userDeleted(state, action) {
            const { id } = action.payload;
            const existingUser = state.entities.find((user) => user.id === id);
            if (existingUser) {
                state.entities = state.entities.filter((user) => user.id !== id);
            }
        },
    },
});

export const { userAdded,userUpdated,userDeleted } = usersSlice.actions;

export default usersSlice.reducer;