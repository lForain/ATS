import { sync } from "glob";
import { union } from "lodash";

export default class Config {
  public static port: number = 3000;
  public static routes: string = "./dist/routes/**/*.js";
  public static models: string = "./dist/models/**/*.js";
<<<<<<< HEAD
  public static mongodb: string = process.env.MONGODB_DSN || "mongodb://db:27017/OMT";
=======
  public static mongodb: string = process.env.MONGODB_DSN;
>>>>>>> 13a2a2437543525da87ba09a86f6fe18f318f9a7
  public static globFiles(location: string): string[] {
    return union([], sync(location));
  }
}
