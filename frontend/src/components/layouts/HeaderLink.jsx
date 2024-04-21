import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderLink = ({ title, url }) => {
    return (
        <Link to={url} className="nav-item text-white text-lg font-bold tracking-wide">{title}</Link>

    )
}
