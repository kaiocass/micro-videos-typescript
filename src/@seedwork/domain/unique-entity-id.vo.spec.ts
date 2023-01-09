import InvalidaUuuidError from "../../@seedwork/errors/invalid-uuid.error";
import UniqueEntityId from "../../@seedwork/domain/unique-entity-id.vo";
import { validate as uuidValidate } from "uuid";

describe("UniqueEntityId Unit Test", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

  //   beforeEach(() => validateSpy.mockClear());

  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidaUuuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const uuid = "63a80d19-1baf-4abe-ac4c-37ca364eaf0a";
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid not passed in constructor", () => {
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
