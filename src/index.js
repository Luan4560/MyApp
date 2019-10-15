import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

class Mybutton extends React.Component{
    render() {
        return ( 
        <div className="box-tick">
            <section className="content">
            <h1 className="title">Sg System</h1>
                <h2 className="subtitle">Possui Cadastro ?</h2>
                <form action="" >
                    <div className="btn-decoration">
                        <button className="btn-1">Sim</button>
                    <button className="btn-2" >Não</button>
                    </div>
                </form> 
            </section>
        </div>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Mybutton />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);