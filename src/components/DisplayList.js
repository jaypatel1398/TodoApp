import React from 'react';
import filterList from './helper';
import _ from 'lodash';
const DisplayList = (props) => {
  let myList = props.listofTasks;
  //todo: merge below function, move to helper
  myList = filterList(props.displayFilter, props.listofTasks);
  console.log("rerender");
  console.log(myList);
  return (_.map(myList,
    (item, index) => (
      <div className="displayList" key={item.id}>
        <input
          type="checkbox"
          id="myCheck"
          className="todoItems"
          onChange={e => props.toggletodo({
            type: 'TOGGLETODO',
            payload: {
              id: item.id
            }
          })}
          checked={myList[index].done}
        />
        {item.task}
      </div>
    )));
}
export default DisplayList;