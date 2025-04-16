import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const riskAssessments = pgTable("risk_assessments", {
  id: serial("id").primaryKey(),
  hazardName: text("hazard_name").notNull(),
  likelihood: integer("likelihood").notNull(),
  severity: integer("severity").notNull(),
  riskScore: integer("risk_score").notNull(),
  riskLevel: text("risk_level").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRiskAssessmentSchema = createInsertSchema(riskAssessments).pick({
  hazardName: true, 
  likelihood: true,
  severity: true,
  riskScore: true,
  riskLevel: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertRiskAssessment = z.infer<typeof insertRiskAssessmentSchema>;
export type RiskAssessment = typeof riskAssessments.$inferSelect;
