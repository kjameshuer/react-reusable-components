import React, { Component } from 'react';

import './List.scss';


class List extends Component {
    
    constructor(props){
        super();
    }

    handleChildren(children){
      
        // if it is an array
        if (!children || children.length <= 0) return <li key="empty">List is empty...except for this</li>

          // if it is an object
          if (!children[0] && !children.hasOwnProperty('length')) return children;

        // if it is a list of objects call make child list, otherwise return list
        return ((!children[0].hasOwnProperty('$$typeof'))  && (typeof children[0] === 'object'))
        ? this.makeChildList(children)
        : children;     
    }

    makeChildList(children){      
        return children.map((child,itt) =>{
            const key = child['key'] || Math.random().toString(36).slice(2);
            const value = child['value'] || `List item ${itt+1} - add property 'value' to listItem`;
            return (
                <li key={key}>{value}</li>
            )
        })
    }

    render() {        
        const children = (this.props.listItems)
        ? this.props.listItems
        : this.props.children;

        return (
           
            <ul>            
                {this.handleChildren(children)}               
            </ul>
   
        )
    }
}

export default List;