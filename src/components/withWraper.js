import React from "react";
import New from "./New";
import Popular from "./Popular";

export default function withWraper(Component) {
    return function Wrapper(props) {
        const { views } = props;
        if (views <= 100) {
            return (
                <New><Component {...props} /></New>
            )
        }
        if (views >= 1000) {
            return (
                <Popular><Component {...props} /></Popular>
            )
        }
    }
}