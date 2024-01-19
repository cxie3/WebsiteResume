import React from 'react';
import ReactDOM from 'react-dom';

class app extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Christina Xie</h1>
                    <p>Web Developer</p>
                </div>
                <div className="container">
                    <div className="section">
                        <h2>About Me</h2>
                        <p>Your introduction and brief description go here.</p>
                    </div>
                    <div className="section">
                        <h2>Skills</h2>
                        <ul className="skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            {/* Add more skills as needed */}
                        </ul>
                    </div>
                    {/* Add more sections (e.g., projects, education, experience) */}
                </div>
                <div className="footer">
                    <p>Contact: christinaxie15@gmail.com | 919-836-3758 | github.com/cxie3</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<app />, document.getElementById('root'));

