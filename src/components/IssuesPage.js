import { Avatar, Card, CardContent, CardHeader, Chip, Link, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import gfm from "remark-gfm";

const getIssues = async (team, repo) => {
    try {
        const response = await fetch(`https://api.github.com/repos/${team}/${repo}/issues?per_page=100`);

        if (!response.ok)  {
            throw new Error("UH-OH, something failed...", response.status);
        } else return response.json();
    } catch (err) {
        console.error("Network problem!");
        throw err;
    }
};

const IssuesPage = () => {
    const { team, repo } = useParams();
    const [issues, setIssues] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        getIssues(team, repo)
            .then((issues) => {
                setIssues(issues);
            })
            .catch((error) => setError(error));
    }, [team, repo]);


    return (
        <div className="issues-page">
            <Typography variant="h1">
                {repo}
            </Typography>
            <Typography variant="subtitle1">
                {team}
            </Typography>
            {error &&
                <Typography style={{ color: "red" }}>
                    {error}
                </Typography>
            }
            <div className="issues-list">
                {issues.map((issue) => (
                    <Card key={issue.id}>
                        <CardHeader
                            avatar={
                                <Avatar src={issue.user.avatar_url}/>
                            }
                            title={
                                <>
                                    <Typography display="inline">
                                        {issue.title}
                                    </Typography>
                                    <Link href={issue.url}>
                                        {` #${issue.number}`}
                                    </Link>
                                </>
                            }
                            subheader={issue.user.login}
                        />
                        <CardContent className="issue-content">
                            {issue.labels.map((label) => (
                                <Chip
                                    key={label.id}
                                    style={{ backgroundColor: `#${label.color}` }}
                                    label={label.name}
                                    clickable
                                    href={label.url}
                                    component="a"
                                />
                            ))}
                            <Typography variant="body2">
                                <ReactMarkdown plugins={[gfm]} allowDangerousHtml>
                                    {issue.body}
                                </ReactMarkdown>
                            </Typography>
                        </CardContent>
                    </Card>
                ))
                }
            </div>
        </div>
    );
};

export default IssuesPage;
