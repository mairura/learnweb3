import React from 'react'
import { useEffect, useState } from 'react';

export default function DependentEffect() {
    const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

    const [recommendations, setRecommendations] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if(searchText.length === 0) {
            setRecommendations([]);
        }else if(searchText.length > 0) {
            const newRecs = names.filter((name) => name.toLowerCase().includes(searchText.toLowerCase()));
            setRecommendations(newRecs);
        }
    }, [searchText]);

  return (
    <div>     
        <h2>Recommendations:</h2>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <ul>
            {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>))
            }
        </ul>
    </div>
  )
}

