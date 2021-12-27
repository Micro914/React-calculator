import React from 'react'
import classes from './Title.module.css'

function Title(props) {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>{props.title}</h1>
        </header>
    )
}

export default Title
