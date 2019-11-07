import React from 'react';

const about = () => {
 let styleAbout = {
  height: '100vh',
  display: 'inline-block',
  textAlign: 'left',
  fontSize: '17px',
  padding: '45px',
 }
 return (
  <div style={styleAbout}>
   <h1 style={{ textAlign: 'center', }}>ABOUT</h1>
   <p>React (also known as React.js or ReactJS) is a JavaScript library[3] for building user interfaces.
    It is maintained by Facebook and a community of individual developers and companies.[4][5][6].
    React can be used as a base in the development of single-page or mobile applications, as it is optimal
     for fetching rapidly changing data that needs to be recorded. However, fetching data is only the
      beginning of what happens on a web page, which is why complex React applications usually require
      the use of additional libraries for state management, routing, and interaction with an API:[7][8]
      Next.js[9] and Gatsby.js[10] are examples of such libraries.</p>
   <p>Lifecycle methods are hooks that allow execution of code at set points during a component's lifetime.
    shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning
    false if a render is not required. componentDidMount is called once the component has "mounted"
    (the component has been created in the user interface, often by associating it with a DOM node). This is
    commonly used to trigger data loading from a remote source via an API. ComponentWillUnmount is called
    immediately before the component is torn down or "unmounted". This is commonly used to clear resource
    demanding dependencies to the component that will not simply be removed with the unmounting of the
    component (e.g., removing any setInterval() instances that are related to the component, or an
    "eventListener" set on the "document" because of the presence of the component) render is the most
     important lifecycle method and the only required one in any component. It is usually called every time
      the component's state is updated, which should be reflected in the user interface.</p>
   <p>React (also known as React.js or ReactJS) is a JavaScript library[3] for building user interfaces.
    It is maintained by Facebook and a community of individual developers and companies.[4][5][6].
    React can be used as a base in the development of single-page or mobile applications, as it is optimal
    for fetching rapidly changing data that needs to be recorded. However, fetching data is only the
    beginning of what happens on a web page, which is why complex React applications usually require
    the use of additional libraries for state management, routing, and interaction with an API:[7][8]
     Next.js[9] and Gatsby.js[10] are examples of such libraries.</p>
   <p>Lifecycle methods are hooks that allow execution of code at set points during a component's lifetime.
     shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning
     false if a render is not required. componentDidMount is called once the component has "mounted"
     (the component has been created in the user interface, often by associating it with a DOM node). This is
     commonly used to trigger data loading from a remote source via an API. ComponentWillUnmount is called
     immediately before the component is torn down or "unmounted".</p>
  </div>
 );
}
export default about;