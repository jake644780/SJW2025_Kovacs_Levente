// Define a simple React component
const App = () => {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>This is a basic React app using CDN.</p>
      </div>
    );
  };
  

  const root = ReactDOM.createRoot(document.getElementById('root'))
  // Render the App component into the 'root' div
  root.render(
    <App />
  );
  