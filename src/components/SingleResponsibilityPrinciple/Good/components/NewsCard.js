import React from 'react'

export default function NewsCard({ title, body }) {
  return (
    <div style={{ border: "1px solid grey", margin: 10 }}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  )
}
