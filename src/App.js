const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>BUG</li>
        </ul>
        <nav>
          <p>Made by Michał</p>
        </nav>
      </section>
      <section className="main">
        <h1>MichalGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">➤</div>
          </div>
          <p className="info">
            chat gpt version ble ble ble
          </p>
        </div>
      </section>
    </div>
  )
}

export default App;
