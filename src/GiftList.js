import React, {Component} from 'react';


class GiftList extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            recepient: '',
            gift: '',
            giftLists: [
                {
                    recepient: '',
                    gift: ''
                }
            ]

        };
        this.getRecepient = this.getRecepient.bind(this);
        this.getGift = this.getGift.bind(this);
        this.callClick = this.callClick.bind(this);
    }

    getRecepient(event) {
        this.setState({recepient: event.target.value});
    };

    getGift(event) {
        this.setState({gift: event.target.value});
    };

    callClick = () => {
        const gifts = {};
        gifts["recepient"] = this.state.recepient;
        gifts["gift"] = this.state.gift;
        const giftLists = this.state.giftLists;
        giftLists.push(gifts);
        this.setState({giftLists});
    };


    render() {
        const giftList = this.state.giftLists.map(gift => {
            if (gift.recepient !== '' && gift.gift !== '') {
                return (<li key={gift.gift}>{gift.recepient} | {gift.gift}</li>)
            }
        });

        return (
            <div>
                <h1 data-title>Gift Giver</h1>
                <input type="text" className="data-gift-recepient" onChange={this.getRecepient}
                       placeholder="name of the recepient"/>
                <input type="text" className="data-gift-item" onChange={this.getGift}
                       placeholder="What's the gift"/>
                <button disabled={!this.state.recepient || !this.state.gift} className="data-submit"
                        onClick={this.callClick}>Submit
                </button>
                <div>
                    {giftList}
                </div>
            </div>
        )
    }
}


export default GiftList;