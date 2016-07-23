(function() {
    'use strict';
    module.exports = React.createClass({
        getInitialState: function() {
            return {
                message: 'Initial message'
            };
        },
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
                }, 1000
            );
        },
        render: function() {
            return (
                <h1>{this.state.message}</h1>
                );
            }
    });
}());
