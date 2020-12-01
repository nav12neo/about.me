import React from 'react';
import data from './data/personal.info.json';

class SkillsComponent extends React.Component {
    render() {
        console.log(data);
      const items = data.skills;
      return (
        <ul>
          {items.map(item => (
            <li key={item.name} className={item.level}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }

  export default SkillsComponent;