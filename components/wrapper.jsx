var ReactDOM = require('react-dom');
(function() {
    'use strict';
    module.exports = React.createClass({
        componentDidMount: function() {
            var self = this;
            setInterval(() => {
                    $.ajax({
                        url: 'http://158.108.224.91:5000/message'
                    })
                    .success((data) => {
                        self.setState({
                            message: data.message
                        });
                    })
                    .error((err) => {

                    });
                }, 500
            );
        },
        getInitialState: function() {
            return { message: 'Initial message'};
        },
        render: function() {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
            );
        }
    });
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper />, document.getElementById('container'));
