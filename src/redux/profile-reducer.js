const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hey, hove old do?", numberLike: 55},
        {id: 2, message: "Hey,like ", numberLike: 24},
        {id: 3, message: "Bilabial ", numberLike: 234},
        {id: 4, message: "Bilabial ", numberLike: 234},

    ],
    newPostText: "it_kamasutra.com"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messages: state.newPostText,
                numberLike: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;