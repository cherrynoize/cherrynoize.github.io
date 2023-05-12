import React from 'react';

/* Return pen */
export default function Pen(props) {
  return (
    <div id={props.id} className={'pen ' + props.className}>
      <h3>{props.title}</h3>
      <p>
        {props.children}
      </p>
    </div>
  );
}
