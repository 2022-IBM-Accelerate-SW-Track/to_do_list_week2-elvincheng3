import React, { Component } from 'react';
import { Stack, Card, CardContent, Divider } from "@mui/material";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Card>
            <CardContent sx={{p: 5}}>
              <h1>Elvin</h1>
              <h2>Student @ Northeastern University</h2>
              <h2>Computer Science and Business</h2>
            </CardContent>
          </Card>
          <Stack direction="row" alignItems="center" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <Card sx={{ minWidth: 150, p: 3 }}>
              <h2>Java</h2>
            </Card>
            <Card sx={{ minWidth: 150, p: 3 }}>
              <h2>Python</h2>
            </Card>
            <Card sx={{ minWidth: 150, p: 3 }}>
              <h2>Swift</h2>
            </Card>
          </Stack>
        </Stack>
      </div>
    )
  }
}