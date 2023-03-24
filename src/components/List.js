/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import React from "react";
import Video from "./Video";
import Article from "./Article";
import withWraper from "./withWraper";

const WrapArticle = withWraper(Article);
const WrapVideo = withWraper(Video);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WrapVideo {...item} />
                );

            case 'article':
                return (
                    <WrapArticle {...item} />
                );
        }
    });
};