import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => {

    const [team, setTeam] = useState("");
    const [repo, setRepo] = useState("");

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <div className="homepage">
            <Typography variant="h1">Nithub</Typography>
            <Card>
                <CardContent className="card">
                    <TextField

                        value={team}
                        label="Team"
                        onChange={handleChange(setTeam)}
                    />
                    <TextField
                        value={repo}
                        label="Repo"
                        onChange={handleChange(setRepo)}
                    />
                    <Link component={Button} variant="contained" color="primary" to={`${team}/${repo}/issues`}>
                        Show Issues
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default HomePage;
