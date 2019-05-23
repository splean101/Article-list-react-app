import React, { PureComponent } from 'react';

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillUpdate() {
        console.log('willUpdate')
    }
    
    render() {
        const { article, isOpen, onButtonClick } = this.props;
        const body = isOpen && <section className='card-text'>{article.text}</section>
        return (
            <div className='card mx-auto' style={{ width: '50%' }}>
                <div className='card-header'>
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        (clicked {this.state.count})
                        <button onClick={onButtonClick} className='btn btn-primary btn-lg float-right'>
                            {!isOpen ? 'open' : 'close'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    {body}
                </div>
                <h6 className='card-subtitle text-muted'>
                    creation date: {(new Date(article.date)).toDateString()}
                </h6>
            </div>
        )

    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

};




export default Article;