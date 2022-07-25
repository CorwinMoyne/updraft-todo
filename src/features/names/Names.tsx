import * as React from "react";
import "./Names.css";

interface Props {}

interface Person {
  id: string;
  name: string;
  age: number;
}

function renderNameAndAge(person: Person) {
  return `${person.name} is ${person.age} years old`;
}

export const people: Person[] = [
  { id: "0", name: "Peter", age: 20 },
  { id: "1", name: "James", age: 25 },
  { id: "2", name: "Walt", age: 30 },
];

const Names: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="names">
      {people.map((person) => (
        <div key={person.id} className="name">
          {renderNameAndAge(person)}
        </div>
      ))}
    </div>
  );
};

export default Names;
