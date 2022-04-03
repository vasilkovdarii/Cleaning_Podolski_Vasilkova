import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src="./img/Group_101.png" alt="logo" />
        <ul className="Menu">
          <li>Home</li>
          <li>Book</li>
          <li>Join our team</li>
        </ul>
        <button className="signIn">Sign in</button>
      </div>

      <div className="Description">
          <h1>always clean</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            augue ac nibh facilisis eleifend. Fusce vitae lacinia est. Nulla et
            congue elit. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Pellentesque sodales nunc eu ultricies
            euismod. Ut sed sem et sapien lacinia sollicitudin malesuada ut
            nisl. Maecenas nec hendrerit justo.
          </p>
          <button className="book">Book now</button>
        </div>
    </div>
  );
}

export default App;
