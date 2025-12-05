import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
}

const Stats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)

  useEffect(() => {
    axios.get('https://api.github.com/users/amiralitvk')
      .then((res) => {
        const { public_repos, followers, following } = res.data
        setStats({ public_repos, followers, following })
      })
      .catch(console.error)
  }, [])

  if (!stats) return <p>Loading GitHub stats...</p>

  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>GitHub Stats</h2>
      <p>Repositories: {stats.public_repos}</p>
      <p>Followers: {stats.followers}</p>
      <p>Following: {stats.following}</p>
    </section>
  )
}

export default Stats
