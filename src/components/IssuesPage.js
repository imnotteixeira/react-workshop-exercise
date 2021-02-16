import React from "react";
import { useParams } from "react-router-dom";

const IssuesPage = () => {
    const { team, repo } = useParams();
    return (
        <div>
            <p>TODO</p>
            <p>
                {`Team: ${team}`}
            </p>
            <p>
                {`Repo: ${repo}`}
            </p>
        </div>
    );
};

export default IssuesPage;
