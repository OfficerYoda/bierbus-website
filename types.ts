import React from "react";

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

