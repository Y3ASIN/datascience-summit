import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

declare global {
  var mongoose: { conn: mongoose.Connection | null; promise: Promise<any> | null };
}

global.mongoose = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGO_URI as string, {});
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}
