export default class InvalidaUuuidError extends Error {
  constructor(message?: string) {
    super(message || "ID must be a valid UUID");
    this.name = "InvalidUuuidError";
  }
}
