import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRiskAssessmentSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Risk assessment routes
  app.post("/api/risk-assessments", async (req, res) => {
    try {
      const riskAssessmentData = insertRiskAssessmentSchema.parse(req.body);
      const savedRiskAssessment = await storage.createRiskAssessment(riskAssessmentData);
      res.status(201).json(savedRiskAssessment);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid risk assessment data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to save risk assessment" });
      }
    }
  });

  app.get("/api/risk-assessments", async (req, res) => {
    try {
      const riskAssessments = await storage.getAllRiskAssessments();
      res.json(riskAssessments);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve risk assessments" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
