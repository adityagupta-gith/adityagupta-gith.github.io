import { Metadata } from "next";

declare global {
  namespace React {
    interface FormEvent {
      preventDefault(): void;
    }
  }
}