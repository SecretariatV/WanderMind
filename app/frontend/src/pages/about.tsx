import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-4xl mx-auto mt-10 glass-card p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-travel-primary mb-4">
            About TravelGenie
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <strong>TravelGenie</strong> is your intelligent AI-powered travel
            companion that builds itineraries for your adventures. Whether
            you're a solo traveler or planning a group trip, TravelGenie
            simplifies your journey planning with smart suggestions on routes,
            flights, weather prep, food places, and events.
          </p>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-muted-foreground text-md leading-relaxed">
              This project was proudly built for the{" "}
              <strong>Global AI-Agent</strong> hosted by Agentverse and{" "}
              <em>Fetch.ai</em>, where developers crafted collaborative
              autonomous agents to solve real-world problems using LLMs and tool
              integration.
            </p>
            <ul className="list-disc list-inside mt-3 text-muted-foreground">
              <li>Multi-agent architecture powered by FastAPI</li>
              <li>Frontend built using React + Tailwind</li>
              <li>
                Agents built for Route, Weather, Flights, Events, and Food
                discovery
              </li>
              <li>LLM integration using Gemini + LangChain</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-travel-accent mb-2">
              Why TravelGenie?
            </h2>
            <p className="text-muted-foreground text-md leading-relaxed">
              In an era of AI automation, TravelGenie showcases how agent
              collaboration and natural language interfaces can create seamless
              travel planning experiences. From understanding your intent to
              crafting weather-aware and cost-effective travel plans — it’s your
              personal travel assistant on autopilot.
            </p>
          </div>
          {/* Architecture GIF */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2 text-travel-primary">
              System Architecture
            </h3>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm flex justify-center">
              <img
                src="/TravelGenie_Architecture.gif"
                alt="TravelGenie Architecture"
                className="max-w-xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t bg-muted/50">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TravelGenie AI-Agent. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
