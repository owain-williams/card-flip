"use client";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-12">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Card>
            <CardHeader>
              <CardTitle>Front</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Graph go here</p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleClick}>See Back</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Back</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Table go here</p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleClick}>See Front</Button>
            </CardFooter>
          </Card>
        </ReactCardFlip>
      </div>
    </>
  );
}
