interface CacheConfiguration {
  enabled?: boolean;
  max?: number;
  maxAge?: number;
}

interface SlekupApiOptions {
  token: string;
  version?: 1;
  cache?: CacheConfiguration;
}

export class Client {
  private token: string;
  private version: number = 1;
  private cache: CacheConfiguration = {
    enabled: true,
    max: 1000,
    maxAge: 1000 * 60 * 60 * 24,
  };

  public constructor({ token, version, cache }: SlekupApiOptions) {
    this.token = token;
    if (version) this.version = version;
    if (cache) {
      if (cache.enabled !== undefined) this.cache.enabled = cache.enabled;
      if (cache.max !== undefined) this.cache.max = cache.max;
      if (cache.maxAge !== undefined) this.cache.maxAge = cache.maxAge;
    }
  }

  public on(event: 'debug', callback: (message: string) => void): void;

  public on(event: 'error', callback: (error: string) => void): void;

  public on(event: 'ready', callback: () => void): void;

  public on(event: 'warn', callback: (message: string) => void): void;

  public on(
    event: 'debug' | 'error' | 'ready' | 'warn',
    callback: (() => void) | ((message?: string) => void)
  ): void {
    switch (event) {
      case 'debug':
        callback('debug');
        break;
      case 'error':
        callback('error');
        break;
      case 'ready':
        callback();
        break;

      case 'warn':
        callback('warn');
        break;
    }
  }

  public async login() {
    return new Promise((resolve, reject) => {
      resolve('ok');
    });
  }
}
