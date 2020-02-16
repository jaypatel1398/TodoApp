import React from 'react';
import filterList from './helper';
import _ from 'lodash';
export default function DisplayList(props) {
    let myList = props.list;
    //todo: merge below function, move to helper
    myList = filterList(props.displayFilter,props.list);
    return _.map(myList,(item, index) => (
      <div className="displayList" key={item.id}>
        <input
          type="checkbox"
          id="myCheck"
          className="todoItems"
          onChange={e => props.check(e, item.id)}
          checked={myList[index].done}
        />
        {item.task}
      </div>
    ));
  }