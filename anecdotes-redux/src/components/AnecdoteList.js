import React from 'react'
import { connect } from 'react-redux'
import { likeAnecdote } from '../reducers/anecdoteReducer';
import { notificationChange } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>like</button>
            </div>
        </div>
    )
}

const AnecdoteList = (props) => {
    return (
        <div>
            {props.visibleAnecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        props.likeAnecdote(anecdote.id, anecdote)
                        props.notificationChange(`You voted '${anecdote.content}'`, 5)
                    }
                    }
                />
            )}
        </div>
    )
}

const anecdotesToShow = ({ anecdotes, filter, notification }) => {
    const filterResults = anecdotes.filter(anecdote => {
        return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    })
    return filterResults.sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state)
    }
}

export default connect(
    mapStateToProps,
    {
        likeAnecdote,
        notificationChange
    }
    
)(AnecdoteList)