
export function ParentComponent() {
  return (
    <Childrencomponent
      name="John"
      age={30}
      isActive={true}
      greetings={<div>Hello I am React app</div>}
    >
      <p>hello I am paragraph</p>
    </Childrencomponent>
  );
}

function Childrencomponent(props) {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h2>My age is {props.age}</h2>
      <h3>My status is {props.isActive ? "Active" : "Inactive"}</h3>
      <div>{props.greetings}</div>
      <div>{props.children}</div>
    </div>
  );
}
