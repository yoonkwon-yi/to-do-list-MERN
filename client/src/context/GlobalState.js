import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  items: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions

  async function getItems () {
    try {
      //since we added the proxy in package.json we don't need localhost:5000 etc.
      // console.log('TRY')
      const res = await axios.get('/api/v1/itemlists')
      // console.log(res)
      dispatch({
        type: 'GET_ITEMS',
        payload: res.data.data
      })
    } catch (error) {
      // console.log('YES')
      // console.log(err)
      // console.log('YES')
      dispatch({
        type: 'ITEMS_ERROR',
        payload: error.response.data.error
      })
    }
  }

  async function deleteItem (id) {
    try {
      await axios.delete(`/api/v1/itemlists/${id}`)
      dispatch({
        type: 'DELETE_ITEM',
        payload: id
      })
    } catch (error) {
      dispatch({
        type: 'ITEM_ERROR',
        payload: error.response.data.error
      })
    }
  }

  async function addItem (newItem) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/itemlists', newItem, config)

      dispatch({
        type: 'ADD_ITEM',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'ITEM_ERROR',
        payload: error.response.data.error
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        error: state.error,
        loading: state.loading,
        getItems,
        deleteItem,
        addItem
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
