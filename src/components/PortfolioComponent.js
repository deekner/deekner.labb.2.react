import React, {useState, useEffect} from "react";
import './PortfolioComponent.css';

export const PortfolioComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/deekner/repos")
        .then(res => res.json())
        .then(data => {setData(data);
        });
    })

    return(
        <div className="Portfolio-container">
            <div className="main">
                <h1 className="title">Portfolio</h1>
                <div className="li-card">
                <ul>
                    {data.map(repos => (
                        <div className="repo-list">
                            <h3>{repos.name}</h3>
                            <p>{repos.description}</p>
                            <a className="button-repo" href={repos.html_url }>Visit the repository</a>
                        </div>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}