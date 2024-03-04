import { Link, FileRoute } from "@tanstack/react-router";
import * as React from "react";
import { z } from "zod";

export const Route = new FileRoute('/').createRoute({
  component: IndexComponent,
});

function IndexComponent() {
  return <div>Hello</div>;
}
