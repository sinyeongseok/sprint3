import { BadRequestError } from "../errors/coustomErrors.js";

export const validateStringId = (id) => {
  if (typeof id !== "string") {
    throw new BadRequestError(`Invalid id type ${typeof id}`);
  }
};
