import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderLink = ({ title, url }) => {
    return (
        <Link to={url} className="nav-item text-white text-lg font-bold font-larsseit tracking-wide">{title}</Link>

    )
}
