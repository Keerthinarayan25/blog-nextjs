import type {Config} from 'drizzle-kit';

export default {
  schema: './src/models/db/schema.ts',
  out:'./drizzle',
  dialect:'postgresql',
  dbCredentials:{
    url: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_l2UwVOLCf0mF@ep-silent-snow-a1hua064-pooler.ap-southeast-1.aws.neon.tech/blog?sslmode=require&channel_binding=require',
  },
  verbose:true,
  strict: true
} satisfies Config;