import React from 'react';

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'confirmed' | 'tentative';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}