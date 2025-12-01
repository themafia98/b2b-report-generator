import './App.css'
import {useCallback, useState} from "react";
import styled from "@emotion/styled";
import {Builder} from "./components/builder/builder.tsx";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

function App() {
    const [getStarted, setGetStarted] = useState(false);

    const getStartedHandler = useCallback(() => {
        setGetStarted(true);
    }, []);

    if (getStarted) {
        return <Builder />
    }

  return (
      <div>
          <Button className="bg-green-700 p-8 text-3xl
                    rounded-2xl shadow-2xl" onClick={getStartedHandler}>
              Get Started
          </Button>
      </div>
  )
}

export default App
