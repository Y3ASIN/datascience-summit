import mongoose, { Connection } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

// Extend the NodeJS Global type to include mongoose
declare global {
  namespace NodeJS {
    interface Global {
      mongoose?: {
        conn: Connection | null;
        promise: Promise<Connection> | null;
      };
    }
  }
}

const globalForMongoose = global as typeof global & {
  mongoose?: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
};

// Ensure `mongoose` is always defined
if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Connection> {
  // Safely access mongoose.conn
  if (globalForMongoose.mongoose!.conn) {
    return globalForMongoose.mongoose!.conn;
  }

  // Safely initialize mongoose.promise
  if (!globalForMongoose.mongoose!.promise) {
    globalForMongoose.mongoose!.promise = mongoose.connect(MONGO_URI as string, {}).then((m) => m.connection);
  }

  // Assign the connection once the promise resolves
  globalForMongoose.mongoose!.conn = await globalForMongoose.mongoose!.promise;
  return globalForMongoose.mongoose!.conn;
}
