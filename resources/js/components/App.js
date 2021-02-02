import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

    const [ count, setCount ] = useState(0);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component</div>

                        <div className="card-body">Count: { count } </div>
                        <div className="card-footer"><button onClick={() => setCount((prevCount) => prevCount + 1)}>Add</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
