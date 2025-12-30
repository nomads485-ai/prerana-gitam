import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Heart, Music } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { events } from "@/data/events";
import { Button } from "@/components/ui/button";

export const categories = [
  {
    title: "Technical",
    description: "Hackathons, coding competitions, robotics, and tech talks.",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    slug: "technical"
  },
  {
    title: "Cultural",
    description: "Dance face-offs, music battles, fashion shows, and drama contests.",
    icon: Music,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    slug: "cultural"
  },
  {
    title: "Wellness",
    description: "Wellness Experiences you'll actually enjoy , thoughtfully  curated to support physical, mental and emotional well-being.",
    icon: Heart,
    color: "text-green-400",
    bg: "bg-green-400/10",
    slug: "wellness"
  }
];

export default function EventCategories() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [expanded, setExpanded] = useState<string | null>(params.get("open"));

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Event Categories</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the diverse range of events happening at Prerana 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => {
          const catEvents = events.filter(e => e.category.toLowerCase() === cat.title.toLowerCase() && e.active);
          const isOpen = expanded === cat.slug;
          return (
            <div key={index} className="">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => {
                  setExpanded(prev => (prev === cat.slug ? null : cat.slug));
                  // update URL so direct links can open this category
                  try { navigate(`/events?open=${cat.slug}`, { replace: true }); } catch {}
                }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center`}>
                      <cat.icon className={`w-8 h-8 ${cat.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{cat.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {cat.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Expanded list of events for this category (vertical accordion) */}
              {isOpen && (
                <motion.div 
                  className="mt-4 space-y-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {catEvents.length === 0 ? (
                    <div className="text-sm text-muted-foreground">No events available yet.</div>
                  ) : (
                    <>
                      {catEvents.map((ev, i) => (
                        <motion.div 
                          key={ev.id} 
                          onClick={(e) => e.stopPropagation()}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Card className="w-full flex flex-col justify-between p-4 border-border/30 hover:border-primary/50 transition-colors">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">{ev.code}</div>
                                <div className="text-sm font-semibold">{ev.registrationFee === "0" ? "Free" : ev.registrationFee}</div>
                              </div>
                              <h4 className="text-lg font-bold mb-1">{ev.title}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-3">{ev.shortDescription}</p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" variant="ghost" onClick={() => navigate(`/events/${cat.slug}/${ev.slug}`)}>Know More</Button>
                              <Button size="sm" onClick={() => navigate(`/register/${cat.slug}`)}>Register Now</Button>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
