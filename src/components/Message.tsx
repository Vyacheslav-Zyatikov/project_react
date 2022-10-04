import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

function Message(props: any) {
    return (
                <Card sx={{ backgroundColor: 'unset', height: 'min-content', width: '95%', padding: '0'}}>
                    <CardContent className="quote" sx={{ height: 'min-content'}}>
                        <Typography variant="h5" className="text">
                            {props.text}
                        </Typography>
                        <Typography className="author">
                            {props.author}
                        </Typography>
                    </CardContent>
                </Card>
    );
}

export default Message;