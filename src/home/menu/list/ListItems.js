import React from 'react';
import Collections from '../../body/collections/Collections'
export default class ListItem extends React.Component { 
    liElement = (active, key, item, empty=false) => {
        const {setState, state, sectionId} = this.props;
        return(
            <li
                className={"ph3 pv3 bb b--light-silver grow pointer "+ (active && 'bg-green')}
                key={key} 
                onClick={
                    empty
                        ? () => setState([ ...state, {id: sectionId, name: item, content: <Collections section={item.toLowerCase()} /> }])
                        : () => setState([ {id: sectionId, name: item, content: <Collections section={item.toLowerCase()}/> }])  
                }
            >{item}
            </li>
        )
    }
    render(){
        const {items, setState, state, array, sectionId} = this.props;  
        let list;
        if(!array){
            list =items.map((item, key) =>
                <li className={"ph3 pv3 bb b--light-silver grow pointer "+(key === state && 'bg-green')} key={key} onClick={() => setState(key)}>{item}</li> 
            )
        } else if (state.length > 0 && state[(sectionId-1)]['id'] === sectionId){

                list = items.map((item, key) =>
                state[0]['name'] === item
                    ? this.liElement(true, key, item)
                    
                    : this.liElement(false, key, item)      
                )
        } else {
            list = items.map((item, key) =>                
                this.liElement(false, key, item, true)
            )
        }
        return(
            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                {list}
            </ul>
        )

    }
}