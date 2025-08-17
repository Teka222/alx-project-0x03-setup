import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Button from "@/components/common/Button";
import { PillProps } from "@/interface"; // Import your interfaces
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters: PillProps[] = [
  { label: "Top Villa" },
  { label: "Self Checkin" },
  { label: "Pet Friendly" },
  { label: "Beachfront" },
];

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-96 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto py-8">
        <div className="flex gap-4 flex-wrap">
          {filters.map((filter, index) => (
            <Button
              key={index}
              buttonLabel={filter.label}
              buttonBackgroundColor="green"
              buttonSize="px-4 py-2"
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-48 obj
