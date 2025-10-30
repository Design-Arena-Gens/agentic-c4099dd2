import { describe, expect, it } from "vitest";
import {
  calculateModuleProgress,
  getLearningPathById,
  getModulesByLevel,
  groupResourcesByType,
  learningPaths,
  quantumModules
} from "@/lib/content";

describe("content helpers", () => {
  it("filters modules by level", () => {
    const foundation = getModulesByLevel("Foundation");
    expect(foundation.length).toBeGreaterThan(0);
    expect(foundation.every((module) => module.level === "Foundation")).toBe(true);
  });

  it("calculates module completion with unique modules", () => {
    const progress = calculateModuleProgress([
      "quantum-basics",
      "quantum-basics",
      "linear-algebra"
    ]);
    expect(progress).toBeCloseTo((2 / quantumModules.length) * 100);
  });

  it("groups resources by content type", () => {
    const grouped = groupResourcesByType([]);
    expect(Object.keys(grouped)).toContain("Course");
    expect(Object.values(grouped).every(Array.isArray)).toBe(true);
  });

  it("returns learning paths by id", () => {
    const target = learningPaths[0];
    expect(getLearningPathById(target.id)).toEqual(target);
    expect(getLearningPathById("missing")).toBeUndefined();
  });
});
