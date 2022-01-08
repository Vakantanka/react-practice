import React, { useState } from 'react'

function ButtonWithHook() {
    // const [greeting, setGreeting] = useState("Helló hook greeting");
    const greetingUseState = useState("Helló hook title");
    const greeting = greetingUseState[0];
    const setGreeting = greetingUseState[1];
    // Ezt a hárm sort helyettesíti a felette levő 1 sor

    const [title, setTitle] = useState("Helló hook title");

    return (
        <div>
            <h1>{title}</h1>
            <p>{greeting}</p>
            <button onClick={ () => setGreeting("Bye! Hook") } >Click me greeting!</button>
            <button onClick={ () => setTitle("Bye! Hook Title") } >Click me title!</button>
        </div>
    )
}

export default ButtonWithHook
