import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const {title, onAdd, showAdd} = props
    const onClick =()=>{
        console.log("Clockk")
    }
  return (
      //style={{color : 'red', backgroundColor: 'blue'}} inline styling
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}
Header.defaultProps = {
    title: "Taskkkk"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//Styling using variable

// const headerStyle = {
//     color : 'red', 
//     backgroundColor: 'blue'
// }
export default Header