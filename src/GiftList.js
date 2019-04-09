import React, {Component} from 'react';


class GiftList extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            recepient: '',
            gift: '',
            getValues: false
        };
        this.getRecepient = this.getRecepient.bind(this);
        this.getGift = this.getGift.bind(this);
    }

    getRecepient = (event) => {
        this.setState({recepient: event.target.value});
    };

    getGift = (event) => {
        this.setState({gift: event.target.value});
    };

    getdata() {
        this.setState({getValues: true});
    };


    render() {
        return (
            <div>
                <h1 data-title>Gift Giver</h1>
                <input type="text" className="data-gift-recepient" onChange={this.getRecepient}
                       placeholder="name of the recepient"/>
                <input type="text" className="data-gift-item" onChange={this.getGift}
                       placeholder="What's the gift"/>
                <button disabled={!this.state.recepient || !this.state.gift} className="data-submit"
                        onSubmit={this.getData}>Submit
                </button>

                <div>{this.state.getValues ? '' : this.state.recepient | this.state.gift}
                </div>
            </div>
        )
    }
}


export default GiftList;