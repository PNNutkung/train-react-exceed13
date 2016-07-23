var ReactDOM = require('react-dom');

(function() {
    'use strict';
    module.exports = React.createClass({
        getInitialState: function() {
            $.ajax({
                url: 'http://158.108.224.91:5000/message'
            })
            .success((data) => {
                console.log(data);
            })
            .error((err) => {

            });
            return {};
        },
        render: function() {
            return (
                <div>

                </div>
            );
        }
    });
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper />, document.getElementById('container'));
