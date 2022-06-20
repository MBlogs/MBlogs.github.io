// These perform the same thing. 
// Javascript XML just helps writing html like syntax
const heading1 = <h1 className="site-heading">Hello, React</h1>
const heading2 = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')

// Contain variable inside JSX
const myName = 'Tania'
const heading3 = <h1>Hello, {myName}</h1>