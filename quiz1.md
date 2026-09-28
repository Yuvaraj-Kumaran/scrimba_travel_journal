1. What do props help us accomplish?

Props allow us to pass data from a parent component to child component, making components reusable and dynamic.

2. How do you pass a prop into a component?

Props are passed to a component as attributes in JSX.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
Props can have custom names when to passed to React components, but arbitary props should not be passed to native DOM elements because they aren't regonized as standard HTML/DOM attributes.

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

function Navbar(props){
    return (
        <header> 
            <h1>{props.title}</h1>
        </header>
    )
}

Props are received through the component's function parameter.

5. What data type is `props` when the component receives it?

props is an 'object' containing the props passed to the component.