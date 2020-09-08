import React,{Component} from "react";
import Item from './item';

class List extends Component {
        state = {
            data: [
                {id: 1,checked: false, label: 'Hit the gym'},
                {id: 2,checked: true, label: 'Pay bills'},
                {id: 3,checked: true, label: 'Meet George'},
                {id: 4,checked: true, label: 'Buy eggs'},
                {id: 5,checked: true, label: 'Read a book'},
                {id: 6,checked: false, label: 'Organize office'}
            ]
        }
        render() {
            return (
                <ul id='myUl'>
                    {this.state.data.map(
                        ({id,label,checked}) => {
                            return <Item key={id} label={label} checked={checked}/>
                        }
                    )}

                </ul>
            )
        }
}
export default List;