declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALCHEMY_API_KEY: string;
      BSC_MAINNET_RPC: string;
      INFURA_API_KEY: string;
      ETHERSCAN_API_KEY: string;
      SEGMENT_WRITE_KEY: string;
      SENTRY_DSN: string;
      DATA_API_KEY: string;
      DATA_ENDPOINT: string;
      DATA_ORIGIN: string;
      PLAYGROUND: 'default' | 'ds';
      LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
      LOG_DEBUG: string;
    }
  }
}

declare global {
  interface Window {
    TrezorConnect: typeof Window.TrezorConnect;
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
