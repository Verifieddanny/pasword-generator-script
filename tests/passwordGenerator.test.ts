import { generateRandomPassword } from "../src/passwordGenerator";

describe("generateRandomPassword", () => {
  test("should generate a password of the specified length", () => {
    const length = 12;
    const password = generateRandomPassword(length);
    expect(password.length).toBe(length);
  });

  test("should include at least one uppercase letter", () => {
    const password = generateRandomPassword(10);
    expect(password).toMatch(/[A-Z]/);
  });

  test("should include at least one lowercase letter", () => {
    const password = generateRandomPassword(10);
    expect(password).toMatch(/[a-z]/);
  });

  test("should include at least one number", () => {
    const password = generateRandomPassword(10);
    expect(password).toMatch(/[0-9]/);
  });

  test("should include at least one special character", () => {
    const password = generateRandomPassword(10);
    expect(password).toMatch(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/);
  });

  test("should throw an error if length is less than 4", () => {
    expect(() => generateRandomPassword(3)).toThrow(
      "Password length must be at least 4 characters to include all types."
    );
  });
});
