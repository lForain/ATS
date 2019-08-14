/** @format */

import * as mongoose from 'mongoose';

import { Ref } from './prop';
import { InstanceType } from './typegoose';

/**
 * Check if the given document is already populated
 * @param doc The Ref with uncertain type
 */
export function isDocument<T>(doc: Ref<T>): doc is InstanceType<T> {
  return doc instanceof mongoose.Model;
}

/**
 * Check if the given array is already populated
 * @param docs The Array of Refs with uncertain type
 */
export function isDocumentArray<T>(docs: Ref<T>[]): docs is InstanceType<T>[] {
  return Array.isArray(docs) && docs.every(v => isDocument(v));
}
