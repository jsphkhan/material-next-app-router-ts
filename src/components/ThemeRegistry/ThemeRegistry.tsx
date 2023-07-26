'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

export default function ThemeRegistry({
  dir,
  children,
}: {
  dir: string;
  children: React.ReactNode;
}) {
  const options = {
    key: 'mui',
    ...(dir === 'rtl' ? { stylisPlugins: [prefixer, rtlPlugin] } : null)
  }
  return (
    <NextAppDirEmotionCacheProvider options={options}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
