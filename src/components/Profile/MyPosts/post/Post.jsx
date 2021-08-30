import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (

        <div className={s.item}>
            <img
                src="data:image/jpeg;base64,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"
                alt=""/>
            <div>
                {props.message}
            </div>

            <div>
                <span className={s.like}>like {props.numberLike}</span>
            </div>
        </div>


    );
}
export default Post;
