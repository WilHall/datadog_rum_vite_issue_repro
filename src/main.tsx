import React from 'react';
import { createRoot } from 'react-dom/client';
import { DOMParser } from '@xmldom/xmldom';
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <React.StrictMode>
    <h1>Hello, DataDog!</h1>
    <h2>Logs:</h2>
    <pre>{JSON.stringify(datadogLogs, null, 2)}</pre>
    <h2>Rum:</h2>
    <pre>{JSON.stringify(datadogRum, null, 2)}</pre>
    <h2>xmldom:</h2>
    <pre>
      {new DOMParser({
        locator: {},
        errorHandler: () => null,
      })
        .parseFromString(
          `<?xml version="1.0" encoding="ISO-8859-1"?>  
          <items><item>Hello, XML!</item></items>`,
          'text/xml',
        )
        .toString()}
    </pre>
  </React.StrictMode>,
);
