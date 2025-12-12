import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEntrySchema.parse(req.body);
      
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(400).json({ error: "This email is already on the waitlist" });
      }

      const entry = await storage.createWaitlistEntry(validatedData);
      const count = await storage.getWaitlistCount();
      
      res.status(201).json({ 
        success: true, 
        entry,
        position: count,
        isEarlyAdopter: count <= 10
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Waitlist signup error:", error);
      res.status(500).json({ error: "Failed to join waitlist" });
    }
  });

  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      const spotsRemaining = Math.max(0, 10 - count);
      res.json({ count, spotsRemaining });
    } catch (error) {
      console.error("Waitlist count error:", error);
      res.status(500).json({ error: "Failed to get waitlist count" });
    }
  });

  return httpServer;
}
