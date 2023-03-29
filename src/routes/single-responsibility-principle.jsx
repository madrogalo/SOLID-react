import React from 'react'
import Layout from '../components/layout/Layout'
import Bad from '../components/SingleResponsibilityPrinciple/Bad/Bad'
import Good from '../components/SingleResponsibilityPrinciple/Good/Good'

export default function SingleResponsibilityPrinciple() {
  return (
    <Layout>
      <h1>Single Responsibility Principle</h1>
      <Bad />
      <Good />
    </Layout>
  )
}
