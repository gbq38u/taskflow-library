it("should throw error for invalid priority", () => {
  const task = new Task("Test");
  expect(() => task.setPriority("urgent")).toThrow();
});
