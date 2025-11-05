"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const LocationCard = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white shadow-xl p-4 text-center">
      <CardContent className="flex flex-col items-center justify-center p-0">
        <MapPin className="h-8 w-8 text-blue-400 mb-2" />
        <p className="text-lg font-semibold">Pasay City, Philippines</p>
      </CardContent>
    </Card>
  );
};

export default LocationCard;