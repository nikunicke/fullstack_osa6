import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
    const add = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.notificationChange(`Anecdote created: '${content}'`, 5)
    }

    return(
        <div>
            <h2>Create new</h2>
            <form onSubmit={add}>
                <input name="anecdote" />
                <button type="submit">add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    notificationChange
}

export default connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)