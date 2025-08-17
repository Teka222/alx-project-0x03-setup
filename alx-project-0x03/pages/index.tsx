import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Button from "@/components/common/Button";
import { PillProps } from "@/interface";
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
          The b
