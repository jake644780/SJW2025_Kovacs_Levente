const { useState, useEffect } = React;

function App(){
    let [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    return (
      <>
        <button onClick={incrementCount}>click me!</button>
        <div class="output">
          {count}
        </div>
      </>
    );
};



  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <App />
  );
