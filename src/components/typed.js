import React,{ Component } from 'react';
import Typed from 'react-typed';
 
class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={[" HTML", " CSS"," Bootstrap", " Foundation", " Javascript", " JQuery", " Node.js", " Express", " Handlebars", " MongoDB", " MySQL", " Sequelize", " Mongoose", " Reactjs"]}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay= {2000}
                    startDelay= {1000}
                    loop={true}
                  showCursor={true}
                />
                <br/>
            </div>
        );
    }
}

export default MyComponent;