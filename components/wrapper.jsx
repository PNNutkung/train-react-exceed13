var ReactDOM = require('react-dom');
(function() {
    'use strict';
    module.exports = React.createClass({
        render: function() {
            var Message = require('./message.jsx');
            var ToDoList = require('./todolist.jsx');
            return (
                <div>
                    <ToDoList />
                    <Message />
                </div>
            );
        }
    });
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper />, document.getElementById('container'));
