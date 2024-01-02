"use client";

import * as React from "react"
import { servicesData } from "@/constants"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Image from "next/image";
import Link from "next/link";

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
        <CardContent className="flex-col aspect-square text-center items-center rounded-lg justify-center p-1">
          {/* Render image */}
          <Link href={service.href || '/'}>
              <Image 
                width={500}
                height={500}
                src={service.image} 
                alt={`Service ${index + 1}`} 
                className="p-4 w-full h-auto mb-2" 
              />
              {/* Render content */}
              <span className="md:text-md font-semibold">{service.content}</span>

          </Link>
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
