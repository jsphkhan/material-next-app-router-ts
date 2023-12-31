// added use client because tss-react does not work with server components
'use client'

import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

import styles from '@/components/MediaCard.style';

const useStyles = makeStyles()(styles as any);

export default function MediaCard({ heading, text }: { heading: string; text: string }) {
  const { classes } = useStyles();

  return (
    <Card>
      <Image
        alt="Random image"
        src="https://source.unsplash.com/random"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <div className={classes.testWrap}>Class Name Test</div>
      </CardActions>
    </Card>
  );
}
