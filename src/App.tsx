import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Observer } from "./homework/1";
import { RequestComponent } from "./homework/2";
import { FormComponent } from "./homework/3";
import { ComponentApp } from "./homework/4";

function App() {
  const [isEndVisible, setIsEndVisible] = useState(false);

  // Function for task 1
  const handleContentEndVisible = () => {
    setIsEndVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>Task 1</h2>
      <Observer onContentEndVisible={handleContentEndVisible}>
        {isEndVisible ? (
          <p>END of TEXT is Visible !</p>
        ) : (
          <p>END of TEXT is UnVisible , scroll down , please ! </p>
        )}
        <p className="just-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          vero inventore delectus qui, quo doloribus dolorum sit. Natus porro
          voluptas, debitis laborum cupiditate, sed nisi voluptatem corrupti
          quidem iure temporibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae aspernatur, officia ea, distinctio
          consequuntur, quod repellendus aperiam molestiae quaerat ipsum
          exercitationem obcaecati? Voluptatibus corrupti quidem animi ex
          deserunt, tenetur facere aliquam ratione architecto mollitia itaque
          necessitatibus voluptate dolore veritatis, fugiat molestias cupiditate
          qui accusamus harum. Tenetur possimus dicta, ducimus ipsum magnam
          quos, architecto quisquam aspernatur a impedit voluptatem aperiam.
          Vitae sed aspernatur quia error placeat vel hic? Velit expedita dolor
          ea facilis quam ab impedit voluptates ullam perspiciatis soluta
          voluptatum reiciendis porro sit illo, error quasi odit quibusdam nisi
          eligendi non laborum veritatis dolores autem! Dolores itaque
          praesentium eaque ex.
        </p>
        {isEndVisible && <p>END of TEXT!</p>}
      </Observer>
      <h2>Task 2</h2>
      <RequestComponent />
      <h2>Task 3</h2>
      <FormComponent />
      <h2>Task 4</h2>
      <ComponentApp />
      <footer>
        <p>end of tasks</p>
      </footer>
    </div>
  );
}

export default App;
