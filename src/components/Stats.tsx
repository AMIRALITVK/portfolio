import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaGithub } from 'react-icons/fa'

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

  const statItems = [
    { label: 'Total Repositories', value: 40 },
    { label: 'Public Repos', value: stats.public_repos },
    { label: 'Followers', value: stats.followers },
  ]

  return (
    <section id="stats" className="section">
      <div className="container">
        <header className="section-header fade-in">
          <h2 className="section-title">GitHub Stats</h2>
          <p className="section-subtitle">
            My open source activity at a glance
          </p>
        </header>

        <div className="stats-grid fade-in">
          {statItems.map((item, index) => (
            <div
              key={item.label}
              className="stat-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="stat-icon">
                <FaGithub size={24} />
              </div>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
