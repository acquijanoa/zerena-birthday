'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Flower } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ZerenaBirthday() {
  const [flowerPositions, setFlowerPositions] = useState([]);

  useEffect(() => {
    const positions = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 10,
    }));
    setFlowerPositions(positions);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating Flowers - Animated */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {flowerPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200"
            style={{ top: pos.top, left: pos.left }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: pos.duration, repeat: Infinity }}
          >
            <Flower size={24} />
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center text-rose-600 mb-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Zerena's Birthday Celebration
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-xl text-gray-700 mb-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join us to celebrate the joy and radiance of Zerena on her special day! 🌸
      </motion.p>

      <Card className="w-[110%] max-w-xl shadow-lg bg-white z-10">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="text-rose-500" />
            <span className="text-gray-800 font-semibold">Date & Time:</span>
            <span className="text-gray-700">Sunday, April 27, 2025 — 11:00 AM</span>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-rose-500 font-semibold">Location:</span>
            <div className="text-gray-700">
              <a
                href="https://maps.app.goo.gl/iRq5YrusA5TJoWdb8"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-rose-600"
              >
                Jordan Lake State Rec Area – Picnic Shelter<br />
                Site Shelter 6, Loop Parkers Creek Shelters<br />
                North Carolina
              </a>
              <p className="mt-2 text-sm text-gray-600">
                The park charges <strong>$7 per car</strong>, so we encourage carpooling 🚗💨<br />
                Also, feel free to bring swimsuits and towels for a dip in the lake! 🏊‍♀️🌊
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-600">
              Expect a warm lakeside gathering with Zerena’s favorite burgers grilled on-site, delicious pastelitos hondureños, music, laughter, and the best company. Come ready to eat, chill, swim, and celebrate the amazing human Zerena is! 💖🍔🌊
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Let us know in the RSVP if you’re down to bring your favorite burger topping or drinks — coolers and juice are golden 🧊🍹<br/>
              If you make a killer salad or have a secret cake recipe, this is your moment 👩‍🍳✨
            </p>
          </div>
        </CardContent>
      </Card>

      <motion.div
        className="mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="https://docs.google.com/spreadsheets/d/1ok3ShQ7AHEmu1nE3T6UBszghEG2shTEEkim4nrQ0ZE0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-rose-500 hover:bg-rose-600 text-white text-lg px-6 py-3 rounded-2xl shadow">
            RSVP Now
          </Button>
        </a>
      </motion.div>
    </div>
  );
}