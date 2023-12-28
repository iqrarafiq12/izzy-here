"use client";

import * as React from "react"
import { servicesData } from "@/constants"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


function ServicesContent() {
  return (
    <>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-auto"
    >
      <CarouselContent>
        {/* Map through constant data */}
        {servicesData.map((service, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex-col rounded-md aspect-square items-center justify-center p-1">
                  {/* Render image */}
                  <img src={service.image} alt={`Service ${index + 1}`} className="w-full h-auto mb-2" />
                  {/* Render content */}
                  <span className="md:text-sm font-semibold">{service.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
</>
  )
}

export default ServicesContent;
