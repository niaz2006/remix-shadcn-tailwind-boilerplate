"use client";

import * as React from "react";

import type { MetaFunction } from "@remix-run/node";
import { Button } from "components/ui/button";
import { Calendar } from "components/ui/calendar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Button>Click Me</Button>
        <label>Date:</label>
        <span>{date?.toDateString()}</span>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </main>
  );
}
