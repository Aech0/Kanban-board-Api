
// export default DisplayDropdown;
// import React, { useState } from 'react';
// import GroupBySelector from './GroupBySelector';
// import SortBySelector from './SortBySelector';

// const DisplayDropdown = ({ onGroupChange, onSortChange }) => {
//   const [displaySelection, setDisplaySelection] = useState('none');

//   const handleDisplayChange = (event) => {
//     setDisplaySelection(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="display">Display:</label>
//       <select id="display" onChange={handleDisplayChange}>
//         <option value="none">Select an option</option>
//         <option value="sort">Sort By:</option>
//         <option value="group">Group By:</option>
//       </select>
//       {displaySelection === 'sort' && (
//         <SortBySelector onSortChange={onSortChange} />
//       )}
//       {displaySelection === 'group' && (
//         <GroupBySelector onGroupChange={onGroupChange} />
//       )}
//     </div>
//   );
// };

// export default DisplayDropdown;
import React, { useState } from 'react';
import GroupBySelector from './GroupBySelector';
import SortBySelector from './SortBySelector';


const DisplayDropdown = ({ onGroupChange, onSortChange }) => {
  const [displaySelection, setDisplaySelection] = useState('none');

  const handleDisplayChange = (event) => {
    setDisplaySelection(event.target.value);
  };

  return (
    <div>

      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap mx-auto p-4">
          <label htmlFor="display">Display:  </label>
          <select id="display" onChange={handleDisplayChange}>
            <option value="none">Select an option</option>
            <option value="grouping">Grouping</option>
            <option value="ordering">Ordering</option>
          </select>
          {displaySelection === 'grouping' && (
            <GroupBySelector onGroupChange={onGroupChange} />
          )}
          {displaySelection === 'ordering' && (
            <SortBySelector onSortChange={onSortChange} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default DisplayDropdown;