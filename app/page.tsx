"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BookOpen, TrendingUp, Users, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Grid, Cell, Cross } from "@/components/Grid";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-semibold"
          >
            <Image alt="SSBS" src="/ssbs.svg" width="50" height="3" />
          </motion.div>
          <nav className="hidden gap-6 md:flex">
            {["About", "Team", "Events", "Resources"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-sm font-medium transition-colors hover:text-foreground/80"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://github.com/SSBS-Econ-Club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        <section className="flex min-h-[80vh] w-full items-center justify-center">
          <Grid
            rows={{
              sm: 4,
              md: 6,
              lg: 8,
            }}
            columns={{
              sm: 4,
              md: 8,
              lg: 12,
            }}
          >
            <Cell
              row={{
                sm: "1/4",
                md: "2/6",
                lg: "2/6",
              }}
              column={{
                sm: "1/-1",
                md: "2/8",
                lg: "2/12",
              }}
              solid
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-8">
                <BlurFadeStagger initialDelay={0.1}>
                  <div className="flex flex-col items-center gap-4">
                    <h1 className="w-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl">
                      TOKENS
                      <br />
                      Economics Club
                    </h1>
                    <h2 className="max-w-2xl text-center text-xl text-zinc-600 sm:text-2xl">
                      Shanghai Starriver Bilingual School
                    </h2>
                  </div>
                  <div className="mt-8 flex flex-row gap-3">
                    <Link href="https://github.com/SSBS-Econ-Club">
                      <Button className="flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-6 py-6 text-white shadow-xl transition-all hover:scale-105 hover:bg-zinc-800 hover:shadow-2xl active:scale-95 active:shadow-sm">
                        <FaGithub className="mr-2 h-5 w-5" />
                        <div className="font-semibold">GitHub</div>
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-8 max-w-2xl text-center text-lg text-zinc-600">
                    Exploring economic principles, fostering critical thinking,
                    and preparing students for the global economy.
                  </p>
                </BlurFadeStagger>
              </div>
            </Cell>
            <Cross row={1} column={1} />
            <Cross row={-1} column={-1} />
          </Grid>
        </section>

        <section id="about" className="relative w-full overflow-hidden py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 to-white"></div>
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container px-4 md:px-6"
          >
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                About Us
              </div>
              <h2 className="bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Excellence in Economics Education
              </h2>
              <p className="max-w-[700px] text-zinc-600 md:text-xl">
                We provide comprehensive support for AP Economics courses,
                prepare students for the National Economics Challenge (NEC).
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <BookOpen className="h-10 w-10 text-amber-500" />,
                  title: "AP Economics Courses",
                  description:
                    "Master AP Microeconomics and AP Macroeconomics.",
                },
                {
                  icon: <Users className="h-10 w-10 text-amber-500" />,
                  title: "SKT-CNEC Competition",
                  description:
                    "Prepare and compete in the SKT-CNEC (formerly NEC) and showcase your economic knowledge. (Officially certified club)",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-amber-500" />,
                  title: "Lectures and Events",
                  description:
                    "Visit top-tier financial companies and attend lectures by industry experts.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-amber-200 hover:shadow-xl"
                >
                  <div className="mb-4 rounded-full bg-amber-50 p-4 transition-colors duration-300 group-hover:bg-amber-100">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-center text-zinc-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="team" className="w-full bg-zinc-900 py-24 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="mb-2 inline-block rounded-full bg-amber-900/30 px-3 py-1 text-sm font-semibold text-amber-400">
                Our Team
              </div>
              <h2 className="bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Meet Our Leaders
              </h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Dedicated students passionate about economics and leadership.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
              {[
                {
                  name: "Lily Ding",
                  role: "Leader",
                  bio: "Founder and Leader of the TOKENS Economics Club.",
                },
                {
                  name: "Mandy Sun",
                  role: "Co-leader",
                  bio: "Very very very smart.",
                },
                {
                  name: "Mabel He",
                  role: "idk",
                  bio: "Very very smart.",
                },
                {
                  name: "Chip Sun?",
                  role: "idk",
                  bio: "Very smart.",
                },
                // {
                //   name: "Tommy Wu",
                //   role: "Coolie",
                //   bio: "Very dumb.",
                // },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center gap-6 rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 transition-all duration-300 hover:border-amber-700 md:flex-row"
                >
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex flex-col text-center md:text-left">
                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-amber-400">
                      {member.name}
                    </h3>
                    <p className="mb-2 font-medium text-amber-400">
                      {member.role}
                    </p>
                    <p className="text-zinc-400">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/*<section id="events" className="relative w-full overflow-hidden py-24">*/}
        {/*  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-amber-50 to-white"></div>*/}
        {/*  <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>*/}

        {/*  <div className="container px-4 md:px-6">*/}
        {/*    <motion.div*/}
        {/*      initial={{ opacity: 0, y: 20 }}*/}
        {/*      whileInView={{ opacity: 1, y: 0 }}*/}
        {/*      transition={{ duration: 0.8 }}*/}
        {/*      viewport={{ once: true }}*/}
        {/*      className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"*/}
        {/*    >*/}
        {/*      <div className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">*/}
        {/*        Upcoming Events*/}
        {/*      </div>*/}
        {/*      <h2 className="bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">*/}
        {/*        Join Our Activities*/}
        {/*      </h2>*/}
        {/*      <p className="max-w-[700px] text-zinc-600 md:text-xl">*/}
        {/*        Participate in our exciting events and expand your economic*/}
        {/*        knowledge.*/}
        {/*      </p>*/}
        {/*    </motion.div>*/}

        {/*    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">*/}
        {/*      {[*/}
        {/*        {*/}
        {/*          title: "AEGON-INDUSTRIAL Fund Management Visit",*/}
        {/*          date: "May 19, 2025",*/}
        {/*          description:*/}
        {/*            "Join us for a visit at AEGON-INDUSTRIAL Fund Management.",*/}
        {/*          link: "#",*/}
        {/*        },*/}
        {/*      ].map((event, i) => (*/}
        {/*        <motion.div*/}
        {/*          key={i}*/}
        {/*          initial={{ opacity: 0, y: 20 }}*/}
        {/*          whileInView={{ opacity: 1, y: 0 }}*/}
        {/*          transition={{ duration: 0.5, delay: 0.1 * i }}*/}
        {/*          viewport={{ once: true }}*/}
        {/*          className="group"*/}
        {/*        >*/}
        {/*          <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-amber-200 hover:shadow-xl">*/}
        {/*            <div className="absolute right-0 top-0 -z-10 h-24 w-24 bg-gradient-to-bl from-amber-100 to-transparent opacity-70"></div>*/}
        {/*            <div className="mb-4">*/}
        {/*              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">*/}
        {/*                {event.date}*/}
        {/*              </span>*/}
        {/*            </div>*/}
        {/*            <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-amber-600">*/}
        {/*              {event.title}*/}
        {/*            </h3>*/}
        {/*            <p className="flex-grow text-zinc-600">*/}
        {/*              {event.description}*/}
        {/*            </p>*/}
        {/*            <div className="mt-4 border-t border-zinc-100 pt-4">*/}
        {/*              <Button*/}
        {/*                variant="ghost"*/}
        {/*                className="h-auto p-0 text-amber-600 transition-transform duration-300 hover:bg-transparent hover:text-amber-700 group-hover:translate-x-1"*/}
        {/*              >*/}
        {/*                <Link href={event.link}>*/}
        {/*                  Learn more <ChevronRight className="ml-1 h-4 w-4" />*/}
        {/*                </Link>*/}
        {/*              </Button>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </motion.div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section
          id="resources"
          className="w-full bg-gradient-to-br from-zinc-900 to-zinc-800 py-24 text-white"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="mb-2 inline-block rounded-full bg-amber-900/30 px-3 py-1 text-sm font-semibold text-amber-400">
                Resources
              </div>
              <h2 className="bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Explore Our Materials
              </h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Access our collection of economics resources and learning
                materials.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Github className="h-8 w-8" />,
                  title: "GitHub Profile",
                  description: "Access our projects and resources on GitHub.",
                  link: "https://github.com/SSBS-Econ-Club",
                },
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "Study Materials",
                  description:
                    "Access our curated economics study materials and guides.",
                  link: "#",
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Competition Resources",
                  description:
                    "Prepare for economics competitions with our comprehensive guides.",
                  link: "#",
                },
              ].map((resource, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <Link href={resource.link} className="block h-full">
                    <div className="group flex h-full flex-col rounded-xl border border-zinc-700 bg-zinc-800 p-6 transition-all duration-300 hover:border-amber-600 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-700/50 p-4 text-amber-400 transition-colors duration-300 group-hover:bg-zinc-700 group-hover:text-amber-300">
                        {resource.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-amber-400">
                        {resource.title}
                      </h3>
                      <p className="flex-grow text-zinc-400">
                        {resource.description}
                      </p>
                      <div className="mt-4 flex items-center text-amber-400 group-hover:text-amber-300">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-zinc-950 py-12">
        <div className="container flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              TOKENS Economics Club
            </h2>
            <p className="text-sm text-zinc-500">
              Shanghai Starriver Bilingual School
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/SSBS-Econ-Club"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-900 p-2 text-zinc-400 transition-colors duration-300 hover:bg-zinc-800 hover:text-amber-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} SSBS TOKENS Economics Club. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
