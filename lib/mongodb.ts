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

// Use a type-safe global variable for Mongoose
const globalForMongoose = global as typeof global & {
  mongoose?: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
};

// Initialize global.mongoose if not already initialized
if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Connection> {
  // If a connection already exists, return it
  if (globalForMongoose.mongoose!.conn) {
    return globalForMongoose.mongoose!.conn;
  }

  // Otherwise, create a new promise for the connection
  if (!globalForMongoose.mongoose!.promise) {
    globalForMongoose.mongoose!.promise = mongoose
      .connect(MONGO_URI as string) // Options removed as they are now defaults
      .then((m) => m.connection);
  }

  // Wait for the promise to resolve and store the connection
  globalForMongoose.mongoose!.conn = await globalForMongoose.mongoose!.promise;
  return globalForMongoose.mongoose!.conn;
}
