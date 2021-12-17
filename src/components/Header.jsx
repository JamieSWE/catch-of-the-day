import React from 'react';
import PropTypes from 'prop-types';

//destructuring of props
const Header = ({ tagline }) => (
  <header className='top'>
    <h1>
      Catch
      <span className='ofThe'>
        <span className='of'>of</span>
        <span className='the'>the</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{tagline}</span>
    </h3>
  </header>
);

export default Header;

//WITHOUT DESTRUCTURING PROPS
// const Header = (props) => {
//   return (
//     <header className='top'>
//       <h1>
//         Catch
//         <span className='ofThe'>
//           <span className='of'>of</span>
//           <span className='the'>the</span>
//         </span>
//         Day
//       </h1>
//       <h3 className='tagline'>
//         <span>{props.tagline}</span>
//       </h3>
//     </header>
//   );
// };
