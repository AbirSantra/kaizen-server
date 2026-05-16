import { envSchema } from './env.schema';
import { z } from 'zod';

export function validateEnv(config: Record<string, unknown>) {
  const parsed = envSchema.safeParse(config);

  if (!parsed.success) {
    console.error(
      'Invalid environment variables:',
      Object.keys(z.flattenError(parsed.error).fieldErrors),
    );

    throw new Error();
  }

  return parsed.data;
}
