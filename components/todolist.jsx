(function() {
    'use strict';
    module.exports = React.createClass({
        getInitialState: function() {
            return { todos: [] };
        },
        componentDidMount: function() {
            var self = this;
            setInterval(() => {
                    $.ajax({
                        url: 'http://158.108.224.91:5000/todos'
                    })
                    .success((data) => {
                        self.setState({
                            todos: data.todos
                        });
                    })
                    .error((err) => {

                    });
                }, 1000
            );
        },
        render: function() {
            return (
                <div>
                    <ul>
                        {
                            this.state.todos.map((item,i) => {
                                return <li key={i}>{item}</li>;
                            })
                        }
                    </ul>
                </div>
            );
        }
    });
}());
