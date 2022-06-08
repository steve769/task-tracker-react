import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

    return <button onClick={props.onClick} style={{backgroundColor : props.color}} className='btn'>{props.text}</button>
}

Button.defaulProps ={
    color: 'green',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button