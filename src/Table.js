import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  // Create the rows of table through array iteration with map
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}> Delete</button>
        </td>
      </tr>
    )
  })
  // Now return the Table body, with rows populated.
  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const { characterData, removeCharacter } = props
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}

export default Table