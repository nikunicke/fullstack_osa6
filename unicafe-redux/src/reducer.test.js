import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
    const initialState = {
        good: 0,
        ok: 0,
        bad: 0
    }

    test('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = counterReducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    test('good is incremented', () => {
        const action = {
            type: 'GOOD',
        }
        const state = initialState
        deepFreeze(state)

        console.log(state)

        const newState = counterReducer(state, action)

        console.log(newState)

        expect(newState).toEqual({
            good: 1,
            ok: 0,
            bad: 0
        })
    })

    test('ok is incremented', () => {
        const action = {
            type: 'OK'
        }

        const state = initialState
        deepFreeze(state)

        const newState = counterReducer(state, action)
        console.log(newState)

        expect(newState).toEqual({...state, ok: state.ok + 1})
    })

    test('bad is incremented', () => {
        const action = {
            type: 'BAD'
        }

        const state = initialState
        deepFreeze(state)

        const newState = counterReducer(state, action)
        console.log(newState)

        expect(newState).toEqual({...state, bad: state.bad + 1})
    })

    test('zero will reset', () => {
        const state = {
            good: 23,
            ok: 13,
            bad: 7
        }

        const action = {
            type: 'ZERO'
        }

        deepFreeze(state)
        const newState = counterReducer(state, action)
        console.log(newState)
        console.log(initialState)

        expect(newState).toEqual(initialState)
    })
})