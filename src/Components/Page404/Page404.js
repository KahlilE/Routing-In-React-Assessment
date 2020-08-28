import React from 'react';

let Page404 = ({location}) => (

    <div>
    <h1>This page cannot be found<code>{location.pathname}</code></h1>
    </div>
)

//https://medium.com/@leonardobrunolima/react-tips-handling-404-pages-24d27191a8dd(source of code)^^^^^^^

export default Page404