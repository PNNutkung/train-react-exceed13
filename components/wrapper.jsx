//var React = require("react");
var ReactDOM = require("react-dom");

(function() {
    'use strict';

    module.exports = React.createClass({
        getInitialState: function() {
            return {
                a: 0,
                b: 0
            }
        },
        handleAChange: function(ele) {
            this.setState({
                a: parseFloat(ele.target.value)
            });
        },
        handleBChange:function(ele) {
            this.setState({
                b: parseFloat(ele.target.value)
            });
        },
        add: function() {
            var aInput = $('#a');
            var bInput = $('#b');
            var result = $('#result');
            var r = parseFloat(aInput.val()) + parseFloat(bInput.val());
            result.html(r);
        },
        sub: function() {
            var aInput = $('#a');
            var bInput = $('#b');
            var result = $('#result');
            var r = parseFloat(aInput.val()) - parseFloat(bInput.val());
            result.html(r);
        },
        render: function() {
            return (
                <div id="container">
                    <h1 id="result">0</h1>
                    <div>
                        <input type="number" onChange={this.handleAChange} id="a"/>
                        <input type="number" onChange={this.handleBChange} id="b"/>
                    </div>
                    <div>
                        <button onClick={this.add}>ADD</button>
                        <button onClick={this.sub}>SUB</button>
                    </div>
                </div>
            );
        }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
    <Wrapper/>, document.getElementById("container"));
