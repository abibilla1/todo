import React,{Component} from "react";
import Item from './item';

class List extends Component {
        state = {
            data: [
                'Hit the gym',
                'Pay bills',
                'Meet George',
                'Buy eggs',
                'Read a boo',
                'Organize office'
            ]
        }
        render() {
            return (
                <ul id='myUl'>
                    {this.state.data.map(
                        (item) => {
                            return <Item label={item}/>
                        }
                    )}

                </ul>
            )
        }
}
export default List;