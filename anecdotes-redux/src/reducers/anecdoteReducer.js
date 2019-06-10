import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = anecdotes => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.create(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
        })
    }
}

export const likeAnecdote = (id, content) => {
    return async dispatch => {
        const likedAnecdote = {...content, votes: content.votes += 1}
        await anecdoteService.update(id, likedAnecdote)
        dispatch({
            type: 'LIKE_ANECDOTE',
            data: likedAnecdote
        })
    }
}


const reducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'INIT_ANECDOTES':
            return action.data
        case 'LIKE_ANECDOTE':
            return state.map(anecdote =>
                anecdote.id !== action.data.id ? anecdote : action.data)
        default:
            return state
    }
}

export default reducer