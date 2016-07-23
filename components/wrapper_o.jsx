//var React = require("react");
var ReactDOM = require("react-dom");

(function() {
    'use strict';

    module.exports = React.createClass({
        getInitialState: function() {
            return {
                a: 0,
                b: 0,
                result: 0
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
            this.setState({
                result: this.state.a + this.state.b
            });
        },
        sub: function() {
            this.setState({
                result: this.state.a - this.state.b
            });
        },
        render: function() {
            return (
                <div id="container">
                    <h1 id="result">{this.state.result}</h1>
                    <div>
                        <input type="number" onChange={this.handleAChange} />
                        <input type="number" onChange={this.handleBChange} />
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
    <Wrapper />, document.getElementById("container"));
